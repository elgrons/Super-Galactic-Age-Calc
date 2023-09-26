/* eslint-disable no-unused-vars */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import SolarAge from "./js/solarage.js";
import FutureBday from "./js/futurebday.js";

function handleAgeForm(event) {
  event.preventDefault();

  document.querySelector('#currentAge').innerText = null;
  document.querySelector('#pastAge').innerText = null;
  document.querySelector('#futureAge').innerText = null;

  const currentAgeForm = parseInt(document.getElementById("currentAge").value);
  const pastAgeForm = parseInt(document.getElementById("pastAge").value);
  const futureAgeForm = parseInt(document.getElementById("futureAge").value);

  const solarAge = new SolarAge(currentAgeForm, pastAgeForm);

  const mercAge = solarAge.mercAge;
  const venusAge = solarAge.venusAge;
  const marsAge = solarAge.marsAge;
  const jupiterAge = solarAge.jupiterAge;

  const pastMercAge = solarAge.yearsPassedMerc();
  const pastVenusAge = solarAge.yearsPassedVenus();
  const pastMarsAge = solarAge.yearsPassedMars();
  const pastJupiterAge = solarAge.yearsPassedJupiter();

  const futureAge = new FutureBday(currentAgeForm, futureAgeForm);

  const futureMercAge = futureAge.mercTime;
  const futureVenusAge = futureAge.venusTime;
  const futureMarsAge = futureAge.marsTime;
  const futureJupiterAge = futureAge.jupiterTime;

  let currentAgeResultsDiv = document.getElementById("current-age-result");
  let pastAgeResultsDiv = document.getElementById("past-age-result");
  let futureAgeResultsDiv = document.getElementById("future-age-result");

  currentAgeResultsDiv.innerHTML = null;
  pastAgeResultsDiv.innerHTML = null;
  futureAgeResultsDiv.innerHTML = null;

  const pTagCurrent = document.createElement("p");
  const pTagPast = document.createElement("p");
  const pTagFuture = document.createElement("p");

  const currentAgeResults = 
  `<span style="color:#63BAD0;">If your current age is ${currentAgeForm} then:</span><br>
  Your current solar age on Mercury is ${mercAge}.<br>
  Your current solar age on Venus is ${venusAge}.<br>
  Your current solar age on Mars is ${marsAge}.<br>
  Your current solar age on Jupiter is ${jupiterAge}.<br>`;

  const pastAgeResults = 
  `<span style="color:#527F7F;">If your past age is ${pastAgeForm} then:</span><br>
  The amount of years that have passed on Mercury is ${pastMercAge}.<br>
  The amount of years that have passed on Venus is ${pastVenusAge}.<br>
  The amount of years that have passed on Mars is ${pastMarsAge}.<br>
  The amount of years that have passed on Jupiter is ${pastJupiterAge}.<br>`;

  const futureAgeResults = 
  `<span style="color:#6197A3;">If your future age is ${futureAgeForm} then:</span><br>
  The amount of years that have yet to pass on Mercury is ${futureMercAge}.<br>
  The amount of years that have yet to pass on Venus is ${futureVenusAge}.<br>
  The amount of years that have yet to pass on Mars is ${futureMarsAge}.<br>
  The amount of years that have yet to pass on Jupiter is ${futureJupiterAge}.<br>`;

  pTagCurrent.innerHTML = currentAgeResults;
  document.querySelector(`#current-age-result`).append(pTagCurrent);

  pTagPast.innerHTML = pastAgeResults;
  document.querySelector(`#past-age-result`).append(pTagPast);

  pTagFuture.innerHTML = futureAgeResults;
  document.querySelector(`#future-age-result`).append(pTagFuture);

  document.getElementById("age-calc-form").reset();
}

window.addEventListener("load", function () {
  document
    .querySelector("#age-calc-form")
    .addEventListener("submit", handleAgeForm);
});
