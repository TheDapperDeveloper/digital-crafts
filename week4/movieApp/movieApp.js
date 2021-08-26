//const movieContainer = document.querySelector(".main-container");

const searchButton = document.querySelector(".search-button")
const searchURL = "http://www.omdbapi.com/"
const apiKey = "?apikey=f0d4af81"


async function searchMovie () {

    const cardContainer = document.querySelector(".movie-cards");
    cardContainer.innerHTML = ""
    const input = document.getElementById("search-field").value;
    const moviePosterPics = await fetch(`${searchURL}` + apiKey + "&s=" + input) 
    console.log(`${searchURL}` + apiKey + "&s="+ input)
    const jsonMovie = await moviePosterPics.json();
    
    
    for (const movieInObject of jsonMovie.Search) {
        const cardContainer = document.querySelector(".movie-cards");
        const allData = document.createElement("div")
        allData.className = "wholeBox"
        const convertedPics = document.createElement("img")
        const movieTitles = document.createElement("h3")
        
        
        convertedPics.src = movieInObject.Poster
        console.log(movieInObject.Poster)
        console.log(movieTitles)
        movieTitles.className = "posters"
        movieTitles.innerHTML = movieInObject.Title
        allData.append(movieTitles, convertedPics)
        cardContainer.append(allData)        
    }    
}
  

    
searchButton.addEventListener("click", () => searchMovie())