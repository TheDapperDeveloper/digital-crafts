const mainContainer = document.querySelector(".main-container")
const searchButton = document.querySelector(".button")

const dataURL = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey= "fd767ad76183cb8a5bf7aeb98cb43342"

async function weatherSearch () {
    const weatherContainer = document.querySelector(".weather-container");
    weatherContainer.innerHTML = ""
    const input = document.querySelector(".name-of-city").value;
    const currentWeather = await fetch (`${dataURL}`+ input + "&units=imperial&appid=" + apiKey)
    console.table(`${dataURL}`+ input + "&units=imperial&appid=" + apiKey)
    const convertedWeather = await currentWeather.json();
    const currentTemp = convertedWeather.main.temp
    console.log(currentTemp)
    const weatherText = document.createElement("h1")
    weatherText.className = "results"
    weatherText.innerHTML = currentTemp.toFixed(0) + "\u00B0F"
   mainContainer.append(weatherContainer)
    weatherContainer.append(weatherText) 
  }



searchButton.addEventListener("click", () => weatherSearch())