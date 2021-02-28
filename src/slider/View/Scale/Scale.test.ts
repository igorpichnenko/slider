import '@testing-library/jest-dom';
import $ from 'jquery';
import { View } from '../View';
import { standardOptions } from '../../interfaces/standardOptions';

describe('Scale', () => {
  let wrap: JQuery<HTMLElement>;
  let view: View;
  

  beforeEach(() => {
    wrap = $("<div class='js-toxin-slider' ></div>")
    wrap.appendTo( "body" )
    view = new View(standardOptions, wrap);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('should be initialized and visible', () => {
    const scale = view.slider.querySelector('.slider__scale_horizontal');

    expect(scale).toBeVisible();
  });

  test('if orientation = "vertical" then the scale should have the modifier "vertical"', () => {
    const newOptions = {
      ...standardOptions,
      orientation: 'vertical',
    };

    const newView = new View(newOptions, wrap);

    const scale = newView.slider.querySelector('.slider__scale_vertical');

    expect(scale).toBeVisible();
  });

  test('should be hidden when isScale = false ', () => {
    view.upData({ isScale: true });
    const scale = view.slider.querySelector('.slider__scale');

    expect(scale).toBeVisible();

    view.upData({ isScale: false });
    expect(scale).not.toBeVisible();
  });

  test('scale divisions should be hidden', () => {
    view.upData({ isScale: true });
    const scaleMarker = view.slider.querySelector('.slider__scale-value');

    expect(scaleMarker).toBeVisible();

    view.upData({ isScale: false });
    expect(scaleMarker).not.toBeVisible();
  });

  test('scale divisions must be created', () => {
    const scaleMarker = view.slider.querySelector('.slider__scale-value');

    expect(scaleMarker).toBeVisible();
  });

  test('if orientation = "vertical" scale divisions should be created with the "vertical" modifier', () => {
    const newOptions = {
      ...standardOptions,
      orientation: 'vertical',
    };

    const newView = new View(newOptions, wrap);

    const scaleMarker = newView.slider.querySelector('.slider__scale-value_vertical');

    expect(scaleMarker).toBeVisible();
  });

  test('if the scale element is one, then by condition it is equal to max', () => {
    
    const scaleMarker = view.slider.querySelector('.slider__scale-value')! as HTMLElement;
   
    expect(scaleMarker.innerHTML).toBe(`${view.state.max}${view.state.scalePostfix}`);
    
  });
 test('clicking on the scale should return the scale value', () => {
    const scaleMarker = view.slider.querySelector('.slider__scale-value') as HTMLElement;

     const value = scaleMarker.innerHTML
     
    const clickScale = jest.fn((event) => event.detail.value);

    view.slider.addEventListener('scaleclick', clickScale);

    scaleMarker.click();

    expect(clickScale.mock.calls.length).toBe(1);
    expect(clickScale.mock.results[0].value).toBe(value);
  });

  test('if onlyDivisions = true then the scale division must have the fs-0 modifier', () => {
    view.upData({ onlyDivisions: true });

    const scaleMarker = view.slider.querySelector('.slider__scale-value') as HTMLElement;

    expect(scaleMarker.classList.contains('slider__scale-value_fs-0')).toBe(true);
  });

  test('should be postfix by default', () => {
    const scaleMarker = view.slider.querySelector('.slider__scale-value') as HTMLElement;

    expect(scaleMarker.innerHTML).toBe(`${view.state.max}${view.state.scalePostfix}`);
  });
  
  test('isScalePostfix = false, then there should be no marker', () => {
    const newOptions = {
      ...standardOptions,
      isScalePostfix: false,
     
    };

    const newView = new View(newOptions, wrap);

    const scaleMarker = newView.slider.querySelector('.slider__scale-value')!
     
    expect(scaleMarker.innerHTML).toBe(String(newView.state.max));
  });
  
  test('isPrefix = true, must be prefix', () => {
    const newOptions = {
      ...standardOptions,
      isPrefix: true,
    };

    const newView = new View(newOptions, wrap);

    const scaleMarker = newView.slider.querySelector('.slider__scale-value')!;

    expect(scaleMarker.innerHTML).toBe(`${newView.state.scalePostfix}${newView.state.max}`);
  });
  
  
  test('there is a separator by default', () => {
    const newOptions = {
      ...standardOptions,
      max: 10000,
    };

    const newView = new View(newOptions, wrap);

    const scaleMarker = newView.slider.querySelector('.slider__scale-value')!;

    expect(scaleMarker.innerHTML).toBe(`${newView.state.max.toLocaleString()}${newView.state.scalePostfix}`);
  });
  
  test('there is a separator by default', () => {
    const newOptions = {
      ...standardOptions,
      max: 10000,
      isSeparate: false,
    };

    const newView = new View(newOptions, wrap);

    const scaleMarker = newView.slider.querySelector('.slider__scale-value')!;

    expect(scaleMarker.innerHTML).toBe(`${newView.state.max.toString()}${newView.state.scalePostfix}`);
  });
  
  test('if separate = ".", then the result should be equal to "de-DE" of the locale', () => {
    const newOptions = {
      ...standardOptions,
      max: 10000,
      separate: '.'
    };

    const newView = new View(newOptions, wrap);

    const scaleMarker = newView.slider.querySelector('.slider__scale-value')!;

    expect(scaleMarker.innerHTML).toBe(`${newView.state.max.toLocaleString('de-DE')}${newView.state.scalePostfix}`);
  });
  test('if separate = ",", then the result should be equal to "en-US" of the locale', () => {
    const newOptions = {
      ...standardOptions,
      max: 10000,
      separate: ','
    };

    const newView = new View(newOptions, wrap);

    const scaleMarker = newView.slider.querySelector('.slider__scale-value')!;

    expect(scaleMarker.innerHTML).toBe(`${newView.state.max.toLocaleString('en-US')}${newView.state.scalePostfix}`);
  });
  test('if separate = " ", then the result should be equal to "undefined" of the locale', () => {
    const newOptions = {
      ...standardOptions,
      max: 10000,
      separate: ' '
    };

    const newView = new View(newOptions, wrap);

    const scaleMarker = newView.slider.querySelector('.slider__scale-value')!;

    expect(scaleMarker.innerHTML).toBe(`${newView.state.max.toLocaleString(undefined)}${newView.state.scalePostfix}`);
  });

  
  
  
})