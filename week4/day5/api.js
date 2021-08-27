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

    for (const dailyWeather of convertedWeather.base[5]) {
        console.log(dailyWeather.base[5])
        const weatherContainer = document.querySelector(".weather-container")
        const weatherText = document.createElement("h1")
        dailyWeather.value = weatherText.innerHTML
        console.log(weatherText)
        weatherContainer.append(weatherText)
    }

}

searchButton.addEventListener("click", () => weatherSearch())