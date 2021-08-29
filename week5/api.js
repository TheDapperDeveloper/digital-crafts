const searchButton = document.querySelector(".search-button")
const searchURL = "https://api.nytimes.com/svc/books/v3/reviews.json?"
const apiKey = "VAzKyUZMmI54bec3AdGCuviya3Z8IEF1"

async function searchBook () {
    const mainContainer = document.querySelector(".main-container")
    const input = document.querySelector(".input").value;
    const searchBook = await fetch(`${searchURL}` + "title=" + input + "&api-key=" + apiKey)
    console.table(`${searchURL}` + "title=" + input + "&api-key=" + apiKey)
    const jsonBook = await searchBook.json();
    console.log(jsonBook)

    const bookReview = jsonBook.results[0].url
    console.table(bookReview)
    const reviewURL = document.createElement("link")
    reviewURL.href = bookReview
    console.log(reviewURL)
    mainContainer.append(reviewURL)

    const bookTitle =jsonBook.results[0].book_title
    console.log(bookTitle)

    const bookAuthor = jsonBook.results[0].book_author
    console.log(bookAuthor)

    const bookDate =jsonBook.results[0].publication_dt
    console.log(bookDate)


}

searchButton.addEventListener("click", () => searchBook())