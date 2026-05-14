setInterval(function () {
  let southAfricaElement = document.querySelector("#south-africa");
  let southAfricaDateElement = southAfricaElement.querySelector(".date");
  let southAfricaTimeElement = southAfricaElement.querySelector(".time");
  let southAfricaTime = moment().tz("Africa/Johannesburg");
  southAfricaDateElement.innerHTML = southAfricaTime.format("MMMM Do YYYY");
  southAfricaTimeElement.innerHTML = southAfricaTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  let zimbabweElement = document.querySelector("#zimbabwe");
  let zimbabweDateElement = zimbabweElement.querySelector(".date");
  let zimbabweTimeElement = zimbabweElement.querySelector(".time");
  let zimbabweTime = moment().tz("Africa/Harare");
  zimbabweDateElement.innerHTML = zimbabweTime.format("MMMM Do YYYY");
  zimbabweTimeElement.innerHTML = zimbabweTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}, 1000);
