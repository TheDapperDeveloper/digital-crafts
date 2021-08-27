const searchButton = document.querySelector(".button")
const dataURL = "api.openweathermap.org/data/2.5/weather?q="
const apiKey= "622d85fb1a656b0a3ab04b6a4f7fe706"

async function weatherSearch () {
    const weatherContainer = document.createElement("div");
    weatherContainer.className = "weather-container"
    const input = document.querySelector(".name-of-city").value;
    const currentWeather = await fetch (`${dataURL}`+ input + "&appid" + apiKey)
    console.log(`${dataURL}`+ input + "&appid" + apiKey)
    const convertedWeather = await currentWeather.json();

}

searchButton.addEventListener("click", () => weatherSearch())