export default class SolarAge {
  constructor(earthAge, pastGalacticAge) {
    this.earthAge = earthAge;
    this.pastGalacticAge = pastGalacticAge;
    this.mercAge = (this.earthAge * .24).toFixed(2);
    this.venusAge = (this.earthAge * .62).toFixed(2);
    this.marsAge = (this.earthAge * 1.88).toFixed(2);
    this.jupiterAge = (this.earthAge * 11.86).toFixed(2);
  }

  yearsPassedMerc() {
    const deductYears = this.earthAge - this.pastGalacticAge;
    let thisTime = deductYears / .24;
    return +thisTime.toFixed(2);
  }

  yearsPassedVenus() {
    const deductYears = this.earthAge - this.pastGalacticAge;
    let thisTime = deductYears / .62;
    return +thisTime.toFixed(2);
  }

  yearsPassedEarth() {
    const deductYears = this.earthAge - this.pastGalacticAge;
    return +deductYears.toFixed(2);
  }

  yearsPassedMars() {
    const deductYears = this.earthAge - this.pastGalacticAge;
    let thisTime = deductYears / 1.88;
    return +thisTime.toFixed(2);
  }

  yearsPassedJupiter() {
    const deductYears = this.earthAge - this.pastGalacticAge;
    let thisTime = deductYears / 11.86;
    return +thisTime.toFixed(2);
  }
}