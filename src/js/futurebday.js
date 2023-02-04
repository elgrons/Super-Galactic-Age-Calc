export default class FutureBday {

  constructor(earthAge, ageIHopeToLiveUntil) {
    this.earthAge = earthAge;
    this.ageIHopeToLiveUntil = ageIHopeToLiveUntil;
    this.mercTime = (this.ageIHopeToLiveUntil - this.earthAge) / .24;
    this.venusTime = +((this.ageIHopeToLiveUntil - this.earthAge) / .62).toFixed();
    this.marsTime = +((this.ageIHopeToLiveUntil - this.earthAge) / 1.88).toFixed();
    this.jupiterTime = +((this.ageIHopeToLiveUntil - this.earthAge) / 11.86).toFixed();
  }

}