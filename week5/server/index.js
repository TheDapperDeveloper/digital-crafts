const Sequelize = require("sequelize");
const { Members } = require("./models");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;


app.post("/signup", async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const newMember = await Members.create ({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });
    console.log(newMember)
    res.send(`Inserted ${newMember.firstName} into table`)
})

app.post("/unsubscribe", async (req, res) => {
    const info = await Members.destroy({
        where: {
            email:req.params.email
        }
    });
    res.send("Deleted")
})


app.listen(PORT, console.log(`Listening on port ${PORT}`));
