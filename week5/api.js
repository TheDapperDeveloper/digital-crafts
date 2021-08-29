const searchButton = document.querySelector(".search-button")
const searchURL = "https://api.nytimes.com/svc/books/v3/reviews.json?"
const apiKey = "VAzKyUZMmI54bec3AdGCuviya3Z8IEF1"

async function searchBook () {
    const mainContainer = document.querySelector(".main-container")
    const input = document.querySelector(".input").value;
    const searchBook = await fetch(`${searchURL}` + "title=" + input + "&" + apiKey)
    console.table(`${searchURL}` + "title=" + input + "&api-key=" + apiKey)
    const jsonBook = await searchBook.json();
    console.log(jsonBook)
}

searchButton.addEventListener("click", () => searchBook())