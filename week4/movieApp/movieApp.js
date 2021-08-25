const movieContainer = document.querySelector(".main-container");
const input = document.querySelector(".input")
const searchButton = document.querySelector(".search-button")
const searchURL = "http://www.omdbapi.com/"
const apiKey = "?apikey=f0d4af81"

async function searchMovie () {
    const movieContainer = document.querySelector(".main-container");
    const moviePosterPics = await fetch(`${searchURL}` + apiKey + "&s=")
    const jsonMovie = await moviePosterPics.json();
    const movieImage = document.createElement("img")
    console.log(movieImage)
    movieImage.src = jsonMovie.image
    movieContainer.append(movieImage)
    console.log(movieImage)
}

//searchMovie();

searchButton.addEventListener("click", () => searchMovie())