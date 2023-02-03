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

  test('should determine how many years have passed on Mercury since a past birthday.', () => {
    const age = new SolarAge(35, 9);
    expect(age.yearsPassedMerc()).toEqual(108.33);
  });

  test('should determine how many years have passed on Venus since a past birthday.', () => {
    const age = new SolarAge(35, 9);
    expect(age.yearsPassedVenus()).toEqual(41.93);
  });

});