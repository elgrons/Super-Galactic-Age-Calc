/* eslint-disable no-undef */
import SolarAge from '../src/js/solarage.js';

describe('SolarAge', () => {

  test('should return the user age in Mercury, Venus, Mars, and Jupiter length years', () => {
    const age = new SolarAge(35, 8.4, 21.7, 65.8, 415.1);
    expect(age.currentAge()).toEqual(35);
    expect(age.currentAge()).toEqual(8.4);
    expect(age.currentAge()).toEqual(21.7);
    expect(age.currentAge).toEqual(65.8);
    expect(age.currentAge()).toBeCloseTo(415.1);
  });

});