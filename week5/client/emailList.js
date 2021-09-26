const e = require("cors");

const submitButton = document.querySelector(".submit-button");
const mainContainer = document.querySelector(".main-container");

const joinList = async (e) => {
    e.preventDefault()
    const url = "http://localhost:3000/signup";
    const fName = document.querySelector(".first-name").value
    const lName = document.querySelector(".last-name").value
    const email = document.querySelector(".email").value
    const newMember = {
        fName,
        lName,
        email
    };

    const addMember = await fetch(url, {
        method: "POST",
        mode:"cors",
        credentials:"omit",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(newMember),
    });
};

submitButton.addEventListener("submit", (e) => {
    console.log("button clicked")
    joinList(e);
});