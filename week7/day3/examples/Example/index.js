const Sequelize = require("sequelize");
const {Users} = require("./models");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// .create()
// .findAll()
// .findByPk()
// .update()
// .destroy()

app.post("/create_users", async(req, res) => {
    const { firstName, lastName, email } = req.body;

    const newUser = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });
    res.send({
        id:newUser.id,
    });
});

app.post("/get_users", async(req, res) => {
    const users = await Users.findAll();
    res.send(users);
});

app.post("/get_users_by_lastname", async(req, res) => {
    const users = await Users.findAll( {
        attributes: ["firstName"]
    });
    res.send(users);
});

app.post("/get_users/:id", async(req, res) => {
    const user = await Users.findByPk(req.params.id);
    res.send(user);
});

app.post("/update_users/:id", async(req, res) => {
    const users = await Users.update(req.body, {
        where: {
            id:req.params.id
        }
    });
    res.send(users);
});

app.post("/delete_user/:id", async(req, res) => {
    const users = await Users.destroy({
        where: {
            id:req.params.id
        }
    });
    res.send("Deleted");
});





app.listen(PORT, console.log(`Listening on port ${PORT}`));
