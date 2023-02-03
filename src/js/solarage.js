export default class SolarAge {
  constructor(age, pastAge) {
    this.age = age;
    this.pastAge = pastAge;
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
  
  yearsPastVenus() {
    const ageDifference = this.age - this.pastAge;
    return ageDifference / .62;
  }

  yearsPastMars() {
  
  }
}