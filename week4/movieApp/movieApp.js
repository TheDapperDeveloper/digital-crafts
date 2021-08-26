//const movieContainer = document.querySelector(".main-container");

const searchButton = document.querySelector(".search-button")
const searchURL = "http://www.omdbapi.com/"
const apiKey = "?apikey=f0d4af81"


async function searchMovie () {
    const cardContainer = document.querySelector(".movie-cards");
    const input = document.getElementById("search-field").value;
    const moviePosterPics = await fetch(`${searchURL}` + apiKey + "&s=" + input) 
    console.log(`${searchURL}` + apiKey + "&s="+ input)
    const jsonMovie = await moviePosterPics.json();
    
    for (const singleMovieData of jsonMovie.Search) {
        //Do I need to create a new div?
        const movieTitles = document.createElement("h3")
        movieTitles.className = "posters"
        movieTitles.innerHTML = singleMovieData.Title
        cardContainer.append(movieTitles)
        console.log(movieTitles)
    }
    
    
    for (const movieInObject of jsonMovie.Search) {
        const convertedPics = document.createElement("img")
        convertedPics.src = movieInObject.Poster
       cardContainer.append(convertedPics)
       console.log(movieInObject.Poster)
       
    }

}
    
searchButton.addEventListener("click", () => searchMovie())