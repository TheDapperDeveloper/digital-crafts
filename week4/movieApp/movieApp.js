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
    convertedPics.href = jsonMovie.Poster
    console.log(jsonMovie.Poster) //Returns an array. Why?
    cardContainer.append(jsonMovie)
    console.log(jsonMovie) 

}

searchMovie()


searchButton.addEventListener("click", () => searchMovie())