const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!")
});

app.post("/cats", (req, res) => {
    res.send("Meow!")
});

app.put("/dogs", (req, res) => {
    res.send("Woof!")
});

app.patch("/cats_and_dogs", (req, res)=> {
    res.send("Dogs and cats living together...mass hysteria!!")
})

app.listen(3000, console.log("I'm on port 3000"))