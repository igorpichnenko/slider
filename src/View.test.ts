import '@testing-library/jest-dom';
import { allColors } from './color';
import { View } from './View';
import { Options } from './interfaces';

describe('View', () => {
  let wrap: HTMLElement;
  let view: View;
  const standardOptions: Options = {
    orientation: 'vertical',
    type: 'double',
    min: 0,
    max: 10,
    step: 1,
    from: 3,
    to: 7,
    prefix: '₽',
    isPrefix: true,
    isLabel: true,
    isScale: true,
    color: 'orange',
    isScalePrefix: true,
    scalePrefix: '₽',
    minMax: false,
    fromTo: false,
    isTrackPrefix: true,
    trackPrefix: '₽',
    isColor: true,
    changeColor: true,
    isGradient: true,
    gradient: 'purple',
    gradientDeg: 45,
    isColorOut: false,
    onlyDivisions: false,
    allColors,
  };

  beforeEach(() => {
    wrap = document.createElement('div');
    wrap.className = 'js-toxin-slider';
    document.body.append(wrap);
    view = new View(standardOptions, wrap);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('initialized and got the correct parameters', () => {
    const {
      orientation, type, minMax, color,
    } = view.state;

    expect(orientation).toBe(standardOptions.orientation);
    expect(type).toBe(standardOptions.type);
    expect(minMax).toBe(standardOptions.minMax);
    expect(color).toBe(standardOptions.color);
  });

  test('sees the necessary methods', () => {
    expect(view.createSlider).toBeDefined();
    expect(view.convertPxToValue).toBeDefined();
  });

  test('make sure it creates the slider with correct parameters', () => {
    const sliderClass = view.slider.className;

    expect(view.slider).toBeTruthy();
    expect(sliderClass).toBe('slider slider_vertical');
  });

  test('should create 2 rollers', () => {
    const rollers = view.slider.querySelectorAll('.slider__roller');

    expect(rollers.length).toBe(2);
    expect(rollers[0]).toBeVisible();
    expect(rollers[1]).toBeVisible();
  });

  test('should create 2 tooltips', () => {
    const tooltips = view.slider.querySelectorAll('.slider__tooltip');

    expect(tooltips.length).toBe(2);
    expect(tooltips[0]).toBeVisible();
    expect(tooltips[1]).toBeVisible();
  });

  test('should create 2 outElements', () => {
    const outElements = view.slider.querySelectorAll('.slider__out');

    expect(outElements.length).toBe(2);
    expect(outElements[0]).toBeVisible();
    expect(outElements[1]).toBeVisible();
  });

  test('should create a track', () => {
    const track = view.slider.querySelector('.slider__track_vertical');

    expect(track).toBeTruthy();
    expect(track).toBeVisible();
  });

  test('should create a bar', () => {
    const bar = view.slider.querySelector('.slider__bar_vertical');

    expect(bar).toBeTruthy();
    expect(bar).toBeVisible();
  });

  test('should create a scale', () => {
    const scale = view.slider.querySelector('.slider__scale_vertical');

    expect(scale).toBeTruthy();
    expect(scale).toBeVisible();
  });

  test('upData method should update orientation in state', () => {
    view.upData({ orientation: 'vertical' });
    expect(view.state.orientation).toBe('vertical');

    view.upData({ orientation: 'horizontal' });
    expect(view.state.orientation).toBe('horizontal');

    view.upData({ orientation: 'vertical' });
    expect(view.state.orientation).toBe('vertical');
  });
  test('roller move must call updatePosition method', () => {
    const spy = jest.spyOn(view, 'updatePosition');
    const roller = view.slider.querySelector('.slider__roller') as HTMLElement;
    roller.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    document.dispatchEvent(new MouseEvent('mousemove'));
    document.dispatchEvent(new MouseEvent('mouseup'));

    expect(spy).toBeCalled();
  });

  test('upData method should update type in state', () => {
    view.upData({ type: 'single' });
    expect(view.state.type).toBe('single');

    view.upData({ type: 'double' });
    expect(view.state.type).toBe('double');

    view.upData({ type: 'single' });
    expect(view.state.type).toBe('single');
  });

  test('upData should change the isScale parameter and change the visibility of the scale', () => {
    const scale = view.slider.querySelector('.slider__scale');

    view.upData({ isScale: false });
    expect(view.state.isScale).toBe(false);
    expect(scale).not.toBeVisible();

    view.upData({ isScale: true });
    expect(view.state.isScale).toBe(true);
    expect(scale).toBeVisible();

    view.upData({ isScale: false });
    expect(view.state.isScale).toBe(false);
    expect(scale).not.toBeVisible();
  });

  test('upData should change the option from', () => {
    view.upData({ from: 0 });
    expect(view.state.from).toBe(0);

    view.upData({ from: -17 });
    expect(view.state.from).toBe(-17);

    view.upData({ from: 7 });
    expect(view.state.from).toBe(7);
  });

  test('upData should change the option to', () => {
    view.upData({ to: 0 });
    expect(view.state.to).toBe(0);

    view.upData({ to: -2 });
    expect(view.state.to).toBe(-2);

    view.upData({ to: 10 });
    expect(view.state.to).toBe(10);
  });

  test('upData should change the option color', () => {
    view.upData({ color: 'green' });
    expect(view.state.color).toBe('green');

    view.upData({ color: 'red' });
    expect(view.state.color).toBe('red');

    view.upData({ color: 'blue' });
    expect(view.state.color).toBe('blue');
  });

  test('upData should change the option gradient', () => {
    view.upData({ gradient: 'green' });
    expect(view.state.gradient).toBe('green');

    view.upData({ gradient: 'red' });
    expect(view.state.gradient).toBe('red');

    view.upData({ gradient: 'blue' });
    expect(view.state.gradient).toBe('blue');
  });
  test('upData should change the option gradientDeg', () => {
    view.upData({ gradientDeg: 37 });
    expect(view.state.gradientDeg).toBe(37);

    view.upData({ gradientDeg: 48 });
    expect(view.state.gradientDeg).toBe(48);

    view.upData({ gradientDeg: 76 });
    expect(view.state.gradientDeg).toBe(76);
  });

  test('upData should change the option prefix', () => {
    view.upData({ prefix: '$' });
    expect(view.state.prefix).toBe('$');

    view.upData({ prefix: '€' });
    expect(view.state.prefix).toBe('€');

    view.upData({ prefix: '$' });
    expect(view.state.prefix).toBe('$');
  });

  test('upData should change the option trackPrefix', () => {
    view.upData({ trackPrefix: '$' });
    expect(view.state.trackPrefix).toBe('$');

    view.upData({ trackPrefix: '€' });
    expect(view.state.trackPrefix).toBe('€');

    view.upData({ trackPrefix: '$' });
    expect(view.state.trackPrefix).toBe('$');
  });

  test('upData should change the option scalePrefix', () => {
    view.upData({ scalePrefix: '$' });
    expect(view.state.scalePrefix).toBe('$');

    view.upData({ scalePrefix: '€' });
    expect(view.state.scalePrefix).toBe('€');

    view.upData({ scalePrefix: '$' });
    expect(view.state.scalePrefix).toBe('$');
  });
});