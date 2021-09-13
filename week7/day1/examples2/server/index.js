const express = require ("express")
const app = express ();
const PORT = 3000;

//middleware
// all our req converted to json
app.use(express.json())

//middleware

//CREATE
app.post("/create_user", (req, res) => {
    res.send("/create_user")
})

//READ
app.get("/get_user", (req, res) => {
    res.send("/get_user")
})

//UPDATE
app.put("/update_user", (req, res) => {
    res.send("/update_user")
})

//DELETE
app.post("/delete_user", (req, res) => {
    res.send("/delete_user")
})

app.listen(PORT, console.log(`Listening on ${PORT}`));