// OpenWeatherMap API key(If in case this key is not working,try to insert key of your own OpenWeatherMap API)
const apiKey = "{Insert your API Key from OpenWeatherMap website}";

// Base URL for weather API with metric units (Celsius)
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";      

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

// Async function to fetch and display weather data for a given city
      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
        // Convert response to JSON format
          var data = await response.json();

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°c";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

          if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
          } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
          } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
      }

      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });





  // document.querySelector(".city").innerHTML = data.name;
  //         document.querySelector(".temp").innerHTML =
  //           Math.round(data.main.temp) + "°c";
  //         document.querySelector(".humidity").innerHTML =
  //           data.main.humidity + "%";
  //         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
