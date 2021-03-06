import { IOptions } from './interfaces';
import { allColors } from './color';

const standardOptions: IOptions = {
  min: 0,
  max: 10,
  step: 1,
  from: 3,
  to: 7,
  postfix: '₽',
  isPrefix: false,
  isPostfix: true,
  isLabel: true,
  isScale: true,
  isSeparate: true,
  color: 'orange',
  isScalePostfix: true,
  scalePostfix: '₽',
  minMax: false,
  fromTo: false,
  isTrackPostfix: true,
  trackPostfix: '₽',
  isColor: true,
  changeColor: true,
  isChangeColor: true,
  isGradient: true,
  gradient: 'purple',
  gradientDeg: 45,
  isColorOut: false,
  onlyDivisions: false,
  separate: ' ',
  allColors,
  isVertical: false,
  isDouble: false,
};

export { standardOptions };
