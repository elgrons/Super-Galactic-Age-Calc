/* eslint-disable no-undef */
import SolarAge from '../src/js/solarage.js';

describe('SolarAge', () => {



  test('should return a users age converted to Mercury, Venus, Mars, and Jupiter length years', () => {
    const age = new SolarAge(35);
    expect(age.earthAge).toEqual(35);
    expect(age.mercAge).toEqual(8.4);
    expect(age.venusAge).toEqual(21.7);
    expect(age.marsAge).toEqual(65.8);
    expect(age.jupiterAge).toBeCloseTo(415.1);
  });

  test('should determine how many years have passed on each planet since a past birthday.', () => {
    const age = new SolarAge(35);
    expect(age.yearsPassed()).toEqual(35);
    expect(age.yearsPassed()).toEqual(50);
    expect(age.yearsPassed()).toEqual(6.38);
    expect(age.yearsPassed()).toEqual(1.01);
    expect(age.yearsPassed()).toEqual(65.8);
    expect(age.yearsPassed()).toEqual(415.1);
  });

});