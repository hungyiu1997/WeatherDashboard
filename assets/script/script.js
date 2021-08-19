var searchCityEl = document.querySelector(".cityname");
var forcast = document.getElementById("forecast");
var searchBtn = document.getElementById("searchbtn");

searchBtn.addEventListener("click", weatherAPI);

function weatherAPI() {

  var search = document.getElementById("formGroupExampleInput").value;
  console.log("SEARCH INPUT: ", search);

  var apiUrl =
    "https://api.weatherapi.com/v1/forecast.json?key=4f08ab911fbb4ee7979182843211608&q=" +
    search +
    "&days=5&aqi=no&alerts=no";

    //"https://api.weatherapi.com/v1/forecast.json?key=4f08ab911fbb4ee7979182843211608&q=atlanta&days=5&aqi=no&alerts=no"

    //fetching the API and data
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

        var oneDayForecast = document.querySelector(".one-day-forecast");
        //create elements for all forecast items
        var cityName = document.createElement("h3");
        var date = document.createElement("p");
        var weatherIcon = document.createElement("p");
        var weatherTemp = document.createElement("p");
        var weatherWind = document.createElement("p");
        var weatherHumid = document.createElement("p");

        //creating a card to display the elements
        var weatherCard = document.createElement("div");
        weatherCard.setAttribute("class", "card");
        var weatherCardBody = document.createElement("div");
        weatherCardBody.setAttribute("class", "card-body");

        //displaying the individual elements
            //get location
        var cityName = data.location.name;
        cityName.textContent = data.location.name;
            //get date
        var date = data.forecast.forecastday[0].date;
        date.textContent = data.forecast.forecastday[0].date;
            //get icon
        var weatherIcon = data.current.condition.icon;
        weatherIcon.textContent = data.current.condition.icon;
            //get temperature
        var weatherTemp = data.current.temp_f;
        weatherTemp.textContent = data.current.temp_f;
            //get wind speed
        var weatherWind = data.current.wind_mph;
        weatherWind.textContent = data.current.wind_mph;
            //get humidity
        var weatherHumid = data.current.humidity;
        weatherHumid.textContent = data.current.humidity;
            //get UV
        var weatherUv = data.current.uv;
        weatherUv.textContent = data.current.uv;

        //append the elements to the card
        weatherCardBody.append(cityName, date, weatherIcon, weatherTemp, weatherWind, weatherHumid, weatherUv);
        weatherCard.append(weatherCardBody);
        oneDayForecast.append(weatherCard);
    })
};

//to display forecast
    //create for loop to loop thru the data
function displayForecast(data) {
    var forecastCard = document.querySelector(".forecastcard");

  for (var i = 1; i < 5; i++) {
    //create variables for the date, icons, humidity, temp, and wind
    var forecastDate = data.forecast.forecastday[1].date;
    forecastDate.textContent = data.forecastday[1].date;

    var forecastIcon = data.forecast.forecastday[1].condition.icon;
    forecastIcon.textContent = data.forecastday[1].condition.icon;

    var forecastHumid = data.forecast.forecastday[1].forecastday.avgtemp_f;
    forecastHumid.textContent = data.forecast.forecastday[1].forecastday.avgtemp_f;

    var forecastTemp = data.forecast.forecastday[1].day.avghumidity;
    forecastTemp.textContent = data.forecast.forecastday[1].day.avghumidity;

    var forecastWind = data.forecast.forecastday[1].day.maxwind_mph;
    forecastWind.textContent = data.forecast.forecastday[1].day.maxwind_mph;

    //create the cards for displaying forecast
    var forecastCard = document.createElement("div");
    forecastCard.setAttribute("class", "card", "m-4");
    var forecastCardBody = document.createElement("div");
    forecastCardBody.setAttribute("class", "card", "m-4");

    //create for loop to go through all 5 cards dynamically


    //add the variables to an object
    var weatherObj = {
      forecastDate: forecastDate,
      forecastIcon: forecastIcon,
      forecastHumid: forecastHumid,
      forecastTemp: forecastTemp,
      forecastWind: forecastWind,
    };
  }
}


