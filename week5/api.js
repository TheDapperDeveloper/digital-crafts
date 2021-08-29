const searchButton = document.querySelector(".search-button")
const searchURL = "https://api.nytimes.com/svc/books/v3/reviews.json?"
const apiKey = "VAzKyUZMmI54bec3AdGCuviya3Z8IEF1"

async function searchBook () {
    const mainContainer = document.querySelector(".main-container")
    const infoContainer = document.querySelector(".info-container")
    const input = document.querySelector(".input").value;
    const searchBook = await fetch(`${searchURL}` + "title=" + input + "&api-key=" + apiKey)
    const jsonBook = await searchBook.json();
    console.table(jsonBook)
// need to add for loop in case there are multiple reviews
// need to add if statement if there is no review
    const bookTitle =jsonBook.results[0].book_title
    // console.table(bookTitle)
    //if (jsonBook.results.length= 0) {
      //  const noReview = document.createElement("h3")
       // noReview.innerHTML = "The New York Times did not publish a review for this book."
    //}
    const viewTitle = document.createElement("h3")
    viewTitle.innerHTML = bookTitle
    mainContainer.append(infoContainer)
    infoContainer.append(bookTitle)
    

    const bookAuthor = jsonBook.results[0].book_author
    const viewAuthor = document.createElement("h3")
    viewAuthor.innerHTL = bookAuthor
    mainContainer.append(infoContainer)
    infoContainer.append(bookAuthor)

    const bookReview = jsonBook.results[0].url
    const reviewURL = document.createElement("a")
    reviewURL.href = bookReview
    reviewURL.innerHTML = "View Book Review"
    mainContainer.append(infoContainer)
    infoContainer.append(reviewURL)

    


    const bookDate =jsonBook.results[0].publication_dt
    console.log(bookDate)


}

searchButton.addEventListener("click", () => searchBook())