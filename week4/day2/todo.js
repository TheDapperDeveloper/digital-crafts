const container = document.querySelector(".main-container");
const input = document.getElementById("userList");
const submitButton = document.querySelector(".submit-button");
const newContainer = document.querySelector(".sec-container")

function itemAdded() {
    const listItems = document.createElement("li");
    const toDoEntry = input.value;
    listItems.innerHTML= toDoEntry;
    newContainer.append(listItems);
    console.log("Things to do:", listItems);
}

submitButton.addEventListener("click", () => {
    itemAdded();
})

