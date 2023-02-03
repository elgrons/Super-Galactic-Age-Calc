/* eslint-disable no-undef */
import SolarAge from '../src/js/solarage.js';

describe('SolarAge', () => {

  test('should return their age in Mercury years', () => {
    const age = new SolarAge(35);
    expect(age.mercuryAge()).toEqual(8.4);
  });

});