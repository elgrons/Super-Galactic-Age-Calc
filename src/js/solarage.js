export default class SolarAge {
  constructor(mercAge, venusAge, marsAge, jupiterAge) {
    this.mercAge = mercAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  mercuryAge() {
    this.age = this.age * .24;
    return this.age;
  }

  venusAge() {
    this.age = this.age * .62;
    return this.age;
  }

  marsAge() {
    this.age = this.age * 1.88;
    return this.age;
  }

  jupiterAge() {
    this.age = this.age * 11.86;
    return this.age;
  }

  yearsPastMercury() {
    const ageDifference = this.age - this.pastAge;
    return ageDifference / .24;
  }
  
  //current age
  //years past
  //years yet to pass
}