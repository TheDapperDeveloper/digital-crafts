const mainContainer = document.querySelector(".main-container")
const searchButton = document.querySelector(".button")

const dataURL = "https://api.openweathermap.org/data/2.5/weather?q="
const apiKey= "622d85fb1a656b0a3ab04b6a4f7fe706"

async function weatherSearch () {
    
    const weatherContainer = document.createElement("div");
    weatherContainer.className = "weather-container"
    const input = document.querySelector(".name-of-city").value;
    const currentWeather = await fetch (`${dataURL}`+ input + "&units=imperial&appid=" + apiKey)
    console.table(`${dataURL}`+ input + "&units=imperial&appid=" + apiKey)
    const convertedWeather = await currentWeather.json();
    const currentTemp = convertedWeather.main.temp
    console.log(currentTemp)
    const weatherText = document.createElement("h1")
    weatherText.innerHTML = currentTemp.toFixed(0) + "\u00B0F"
    mainContainer.append(weatherContainer)
    weatherContainer.append(weatherText) 
    input.value = ""
  }



searchButton.addEventListener("click", () => weatherSearch())