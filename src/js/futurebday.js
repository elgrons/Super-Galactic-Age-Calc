export default class FutureBday {

  constructor(earthAge, ageIHopeToLiveUntil) {
    this.earthAge = earthAge;
    this.ageIHopeToLiveUntil = ageIHopeToLiveUntil;
    this.mercTime = ((this.ageIHopeToLiveUntil - this.earthAge) / .24).toFixed(2);
    this.venusTime = +((this.ageIHopeToLiveUntil - this.earthAge) / .62).toFixed(2);
    this.earthTime = this.ageIHopeToLiveUntil - this.earthAge;
    this.marsTime = +((this.ageIHopeToLiveUntil - this.earthAge) / 1.88).toFixed(2);
    this.jupiterTime = +((this.ageIHopeToLiveUntil - this.earthAge) / 11.86).toFixed(2);
  }

}