export default class FutureBday {

  constructor(earthAge, ageIHopeToLiveUntil) {
    this.earthAge = earthAge;
    this.ageIHopeToLiveUntil = ageIHopeToLiveUntil;
    this.mercTime = (this.ageIHopeToLiveUntil - this.earthAge) / .24;
    
  }

}