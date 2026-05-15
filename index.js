function updateTime() {
  let southAfricaElement = document.querySelector("#south-africa");
  if (southAfricaElement) {
    let southAfricaDateElement = southAfricaElement.querySelector(".date");
    let southAfricaTimeElement = southAfricaElement.querySelector(".time");
    let southAfricaTime = moment().tz("Africa/Johannesburg");
    southAfricaDateElement.innerHTML = southAfricaTime.format("MMMM Do YYYY");
    southAfricaTimeElement.innerHTML = southAfricaTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
  let zimbabweElement = document.querySelector("#zimbabwe");
  if (zimbabweElement) {
    let zimbabweDateElement = zimbabweElement.querySelector(".date");
    let zimbabweTimeElement = zimbabweElement.querySelector(".time");
    let zimbabweTime = moment().tz("Africa/Harare");
    zimbabweDateElement.innerHTML = zimbabweTime.format("MMMM Do YYYY");
    zimbabweTimeElement.innerHTML = zimbabweTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A",
    )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updateCity);
