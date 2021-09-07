const cowsay = require("cowsay");
const express = require ('express');
const app = express();

app.post ("/sendCowUserName", (req, res) => {
    res.send(cowsay.say({
        text: "Adding cow user"}))
    });

app.post("/sendCowAppointment", (req,res) => {
    res.send(cowsay.say({
        text:"Setting up cow appointment"}))
});

app.get("/getCowUsername", (req, res) => {
    res.send(cowsay.say( {
        text: "Adding cow user"}))
});

app.get("/getCowAppointment", (req, res) => {
    res.send(cowsay.say({
        text:"Setting up cow appointment"})
)});

app.delete("/deleteCowUser", (req, res) => {
    res.send(console.log("User deleted."))
});

app.listen(3000, console.log("This works") )