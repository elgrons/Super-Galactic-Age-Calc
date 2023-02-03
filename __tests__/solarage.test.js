/* eslint-disable no-undef */
import SolarAge from '../src/js/solarage.js';

describe('SolarAge', () => {

  test('should return their age in Mercury years', () => {
    const age = new SolarAge(35);
    expect(age.mercuryAge()).toEqual(8.4);
  });

  test('should return their age in Venus years', () => {
    const age = new SolarAge(35);
    expect(age.venusAge()).toEqual(21.7);
  });

  test('should return their age in Mars years', () => {
    const age = new SolarAge(35);
    expect(age.marsAge()).toEqual(65.8);
  });

  test('should return their age in Jupiter years', () => {
    const age = new SolarAge(35);
    expect(age.jupiterAge()).toBeCloseTo(415.1);
  });

  test('should correctly determine how many Mercury years have past since their 23rd (aka Michael Jordan) birthday', () => {
    const age = new SolarAge(35, 23);
    expect(age.yearsPastMercury()).toEqual(50);
  });

  test('should correctly determine how many Venus years have past since their 23rd (aka Michael Jordan) birthday', () => {
    const age = new SolarAge(35, 23);
    expect(age.yearsPastVenus()).toBeCloseTo(19.35);
  });

  test('should correctly determine how many Mars years have past since their 23rd (aka Michael Jordan) birthday', () => {
    const age = new SolarAge(35, 23);
    expect(age.yearsPastMars()).toBeCloseTo(6.38);
  });

  test('should correctly determine how many Jupiter years have past since their 23rd (aka Michael Jordan) birthday', () => {
    const age = new SolarAge(35, 23);
    expect(age.yearsPastJupiter()).toBeCloseTo(1.01);
  });

  test('should correctly determine how many Mercury years have yet to pass from when a user is a certain age until they are another age in the future', () => {
    const age = new SolarAge(35, 23, 49);
    expect(age.mercuryYearsToPass()).toBeCloseTo(58.33);
  });

  test('should correctly determine how many Venus years have yet to pass from when a user is a certain age until they are another age in the future', () => {
    const age = new SolarAge(35, 23, 49);
    expect(age.venusYearsToPass()).toBeCloseTo(22.58);
  });

});