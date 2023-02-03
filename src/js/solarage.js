export default class SolarAge {
  constructor(earthAge, mercAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercAge = mercAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  currentAge() {
    let year = this.earthAge;
    this.mercAge = year * .24;
    this.venusAge = year * .62;
    this.marsAge = year * 1.88;
    this.jupiterAge = year * 11.86;
    return ;
  }
  
  //current age
  //years past
  //years yet to pass
}