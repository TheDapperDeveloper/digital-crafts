const cowsay = require("cowsay")
const express = require('express');
const app = express();

app.get("/home", (req, res) => {
    res.send("howdy");
}); // route - a direction your server could go (need an http method (i.e. get) and a url)
// routes direct your request and return a response

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e: "oO",
//     T: "U ",
// })
// );

app.listen(3000, console.log("I'm on port 3000"));
app.listen(PORT, console.log('I\'m on port `${PORT}`'))