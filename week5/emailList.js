const submitButton = document.querySelector(".book-list")
const mainContainer = document.querySelector(".main-container")
const thankYouContainer = document.createElement("div")

function thankYou () {
    //const thankYouMessage = document.querySelector(".form-container")
    const viewMessage = document.createElement("h2")
    viewMessage.innerHTML = "Thank you for joining Brande's Book Club"
    thankYouContainer.append(viewMessage)
    mainContainer.append(thankYouContainer)
}



submitButton.addEventListener("submit", () => thankYou())
