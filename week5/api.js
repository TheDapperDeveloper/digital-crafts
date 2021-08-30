const searchButton = document.querySelector(".search-button")
const searchURL = "https://api.nytimes.com/svc/books/v3/reviews.json?"
const apiKey = "VAzKyUZMmI54bec3AdGCuviya3Z8IEF1"

async function searchBook () {
    const mainContainer = document.querySelector(".main-container")
    const infoContainer = document.querySelector(".info-container")
    infoContainer.innerHTML = ''
    const input = document.querySelector(".input").value;
    
    const searchBook = await fetch(`${searchURL}` + "title=" + input + "&api-key=" + apiKey)
    const jsonBook = await searchBook.json();
    console.log(jsonBook)
    console.table(jsonBook.num_results)

// need to add for loop in case there are multiple reviews
            if (jsonBook.num_results == '0') {
                const noReview = document.createElement("h3")
                 noReview.innerHTML = "The New York Times did not publish a review for this book."
                  console.log(noReview)
                 mainContainer.append(infoContainer)
                  infoContainer.append(noReview)
              } else if (jsonBook.num_results > '0') {
                  for (const books of jsonBook.results) {
                        const viewTitle = document.createElement("h1")
                          viewTitle.innerHTML = books.book_title
                          const bookAuthorName = document.createElement("h2")
                          bookAuthorName.innerHTML = books.book_author
                          const articleAuthorName = document.createElement("h3")
                          const viewAuthor = books.byline
                          articleAuthorName.innerHTML = viewAuthor
                          mainContainer.append(infoContainer)
                          infoContainer.append(viewTitle, bookAuthorName, articleAuthorName)

                        const bookReview = books.url
                        const reviewURL = document.createElement("a")
                        reviewURL.href = bookReview
                        reviewURL.innerHTML = "View Book Review"
                        mainContainer.append(infoContainer)
                        infoContainer.append(reviewURL)

                        const summary = books.summary
                        const viewSummary = document.createElement("h3")
                        viewSummary.innerHTML = summary
                        mainContainer.append(infoContainer)
                        infoContainer.append(viewSummary)
                        
                  }

        }
    }


searchButton.addEventListener("click", () => searchBook())