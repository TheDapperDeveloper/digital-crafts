const container = document.querySelector(".main-container")
const newContainer = document.querySelector(".sec-container");
const input = document.querySelector(".input");
const submitButton = document.querySelector(".submit-button");

const listItems = document.createElement("li");


function itemAdded() {
    const toDoEntry = input.value;
    listItems.innerHTML = toDoEntry;
    newContainer.append(toDoEntry);
    console.log("Here is the item", toDoEntry);
}

submitButton.onclick = () => itemAdded();
