import { ViewState } from '../../interfaces/interfaces';

class Rollers {
  constructor(options: ViewState) {
    this.create(options);
  }

  private create(options: ViewState) {
    const { slider, orientation } = options;

    const rollerFirst = document.createElement('div');
    rollerFirst.className = `slider__roller slider__roller_first slider__roller_${orientation}`;

    const rollerSecond = document.createElement('div');

    rollerSecond.className = `slider__roller_second
      slider__roller
      slider__roller_${orientation}`;

    slider.append(rollerFirst);
    slider.append(rollerSecond);

    this.createTooltip(rollerFirst, rollerSecond, options);
    this.moveRollersAtValue(options, rollerFirst, rollerSecond);
    this.toggleRollers(options, rollerSecond);
    this.updataColor(options, rollerFirst, rollerSecond);
  }

  private createTooltip(rollerFirst: HTMLElement, rollerSecond: HTMLElement, options: ViewState) {
    const { orientation } = options;

    const fistTooltip = document.createElement('div');
    fistTooltip.className = `slider__tooltip_first slider__tooltip slider__tooltip_${orientation}`;
    const secondTooltip = document.createElement('div');
    secondTooltip.className = `slider__tooltip_second slider__tooltip slider__tooltip_${orientation}`;

    rollerFirst.append(fistTooltip);
    rollerSecond.append(secondTooltip);

    this.updataOutTooltip(fistTooltip, secondTooltip, options);
  }

  private updataOutTooltip(fistTooltip: HTMLElement,
    secondTooltip: HTMLElement, options: ViewState) {
    const {
      to,
      from,
      isPostfix,
      isLabel, isPrefix,
    } = options;

    let { postfix } = options;

    if (isPostfix === false) {
      postfix = '';
    }

    // настройки постфикс

    if (isLabel === true) {
      fistTooltip.innerHTML = `${this.separate(from, options)}${postfix}`;
      secondTooltip.innerHTML = `${this.separate(to, options)}${postfix}`;

      // настройки префикс
      if (isPrefix === true) {
        fistTooltip.innerHTML = `${postfix}${this.separate(from, options)}`;
        secondTooltip.innerHTML = `${postfix}${this.separate(to, options)}`;
      }
    }

    this.setColor(fistTooltip, secondTooltip, options);
  }

  private separate(value: number, options: ViewState): string {
    const { isSeparate } = options;
    let { separate } = options;
    let val = '';

    if (isSeparate === false) {
      val = value.toString();
    } else {
      if (separate === ',') {
        separate = 'en-US';
      }
      if (separate === '.') {
        separate = 'de-DE';
      }
      if (separate === ' ') {
        separate = undefined;
      }
      val = value.toLocaleString(separate);
    }

    return val;
  }

  private setColor(fistTooltip: HTMLElement,
    secondTooltip: HTMLElement, options: ViewState) {
    const {
      color, gradient,
      isColorOut, allColors, isChangeColor, isLabel,
    } = options;

    /**
     * Задумка сделать обратный конвектор из 16-ричного в обычный вид, например #fff в
    white, и в дальнейшем соьирался дополнять перевод
    * */
    let newColor = allColors[color];
    let newGradient = allColors[gradient];
    // console.log(color)
    // console.log(newColor)
    if (newGradient === undefined) {
      newGradient = gradient;
    }

    if (newColor === undefined) {
      newColor = color;
    }
    if (isChangeColor === true) {
      if (isColorOut === true) {
        fistTooltip.innerHTML = String(newColor);
        secondTooltip.innerHTML = String(newGradient);

        fistTooltip.style.backgroundColor = `${color}`;
        secondTooltip.style.backgroundColor = `${gradient}`;
        fistTooltip.classList.add('slider__tooltip_bg');
        secondTooltip.classList.add('slider__tooltip_bg');
      }
    }
    if (isLabel === false) {
      fistTooltip.classList.add('slider__tooltip_display-none');
      secondTooltip.classList.add('slider__tooltip_display-none');
    }
  }

  private updataColor(options: ViewState, rollerFirst: HTMLElement, rollerSecond: HTMLElement) {
    const {
      color, isGradient, gradient, isChangeColor, gradientDeg,
    } = options;
    if (isChangeColor === true) {
      if (isGradient === true) {
        rollerFirst.style.background = `linear-gradient(${gradientDeg}deg, ${color}, ${gradient})`;
        rollerSecond.style.background = `linear-gradient(${gradientDeg}deg, ${color}, ${gradient})`;
      } else {
        rollerFirst.style.background = color;
        rollerSecond.style.background = color;
      }
    }
  }

  public moveRollersAtValue(options: ViewState, rollerFirst: HTMLElement,
    rollerSecond: HTMLElement): void {
    const {
      to,
      from, orientation,
    } = options;

    const pxTo = this.convertValueToPx(to, options);
    const pxFrom = this.convertValueToPx(from, options);

    const positionTo = this.convertPxToProcent(pxTo, options);
    const positionFrom = this.convertPxToProcent(pxFrom, options);

    if (orientation === 'horizontal') {
      rollerFirst.style.left = `${positionFrom}%`;
      rollerSecond.style.left = `${positionTo}%`;
    } else {
      rollerFirst.style.bottom = `${positionFrom}%`;
      rollerSecond.style.bottom = `${positionTo}%`;
    }
  }

  public upData(options: ViewState) {
    const { slider } = options;

    const rollerFirst = slider.querySelector('.slider__roller_first')! as HTMLElement;
    const rollerSecond = slider.querySelector('.slider__roller_second')! as HTMLElement;
    const fistTooltip = slider.querySelector('.slider__tooltip_first')! as HTMLElement;
    const secondTooltip = slider.querySelector('.slider__tooltip_second')! as HTMLElement;

    this.moveRollersAtValue(options, rollerFirst, rollerSecond);
    this.toggleRollers(options, rollerSecond);
    this.updataColor(options, rollerFirst, rollerSecond);
    this.updataOutTooltip(fistTooltip, secondTooltip, options);
  }

  private convertValueToPx(value: number, options: ViewState): number {
    const {
      min,
      max,
      step,
      size,
      oneStep,
    } = options;

    if (value === max) return size;

    return Math.round((value - min) / step) * oneStep;
  }

  private convertPxToProcent(value: number, options: ViewState): number {
    const {
      size,
    } = options;
    return (value * 100) / size;
  }

  private toggleRollers(options: ViewState, element: HTMLElement): void {
    const { type } = options;

    if (type === 'single') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  }
}

export { Rollers };
