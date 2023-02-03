export default class SolarAge {
  constructor(earthAge, mercAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercAge = mercAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  currentAge() {
    // this.mercAge = this.earthAge * .24;
    // this.venusAge = this.earthAge * .62;
    // this.marsAge = this.earthAge * 1.88;
    // this.jupiterAge = this.earthAge * 11.86;
  }

  // mercuryAge() {
  //   this.age = this.age * .24;
  //   return this.age;
  // }

  // venusAge() {
  //   this.age = this.age * .62;
  //   return this.age;
  // }

  // marsAge() {
  //   this.age = this.age * 1.88;
  //   return this.age;
  // }

  // jupiterAge() {
  //   this.age = this.age * 11.86;
  //   return this.age;
  // }

  // yearsPastMercury() {
  //   const ageDifference = this.age - this.pastAge;
  //   return ageDifference / .24;
  // }
  
  //current age
  //years past
  //years yet to pass
}