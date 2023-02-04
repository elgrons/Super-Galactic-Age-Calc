/* eslint-disable no-undef */
import FutureBday from '../src/js/futurebday.js';

describe('FutureBday', () => {

  test('should determine how many Mercury, Venus, Mars, and Jupiter length years have yet to pass until a future birthday', () => {
    const bday = new FutureBday(35, 89);
    expect(bday.earthAge).toEqual(35);
    expect(bday.ageIHopeToLiveUntil).toEqual(89);
    expect(bday.mercTime).toEqual(225);
    expect(bday.venusTime).toEqual(87);
    expect(bday.marsTime).toEqual(29);
  });

});