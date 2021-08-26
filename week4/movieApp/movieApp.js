const movieContainer = document.querySelector(".main-container");
const cardContainer = document.querySelector(".movie-cards");
const input = document.getElementById("search-field").value;
const searchButton = document.querySelector(".search-button")
const searchURL = "http://www.omdbapi.com/"
const apiKey = "?apikey=f0d4af81"

async function searchMovie () {
    const cardContainer = document.querySelector(".movie-cards");
    const input = document.getElementById("search-field").value;
    const moviePosterPics = await fetch(`${searchURL}` + apiKey + "&s=" + input) 
    console.log(`${searchURL}` + apiKey + "&s="+ input)
    const jsonMovie = await moviePosterPics.json();
    const convertedPics = document.createElement("img")
    convertedPics.href = jsonMovie.Search[0].Poster
    cardContainer.append(convertedPics)
    console.log(convertedPics)// returns an image but there's nothing showing in the browser

}

searchMovie()


searchButton.addEventListener("click", () => searchMovie())