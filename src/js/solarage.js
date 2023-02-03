export default class SolarAge {
  constructor(earthAge, pastGalacticAge) {
    this.earthAge = earthAge;
    this.pastGalacticAge = pastGalacticAge;
    this.mercAge = this.earthAge * .24;
    this.venusAge = this.earthAge * .62;
    this.marsAge = this.earthAge * 1.88;
    this.jupiterAge = this.earthAge * 11.86;
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

  yearsPassedMars() {
    const deductYears = this.earthAge - this.pastGalacticAge;
    let thisTime = deductYears / 1.88;
    return +thisTime.toFixed(2);
  }




  //years yet to pass
}