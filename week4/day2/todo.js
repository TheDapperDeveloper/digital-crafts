const container = document.querySelector(".main-container");
const input = document.getElementById("userList");
const submitButton = document.querySelector(".submit-button");
const newContainer = document.querySelector(".sec-container");

//const listItems = document.createElement("li");

function itemAdded() {
    const listItems = document.createElement("li");
    const toDoEntry = input.value;
    listItems.innerHTML = toDoEntry;
    newContainer.append(toDoEntry);
    console.log("Here is the item", toDoEntry);
}

submitButton.addEventListener("click", () => {
    itemAdded();
})

