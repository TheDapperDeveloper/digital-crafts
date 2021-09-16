const Sequelize = require("sequelize");
const {toDoList} = require("./models");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// const es6Renderer = require("express-es6-template-engine") 
// app.engine('html', es6Renderer); 
// app.set('views', 'templates'); 
// app.set('view engine', 'html');

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// .create()
// .findAll()
// .findByPk()
// .update()
// .destroy()

//Create
app.post("/create_todo", async(req, res) => {
    const { task } = req.body;
    const newTask = await toDoList.create({
        task:task,
    });
    res.send({
        task:newTask.task,
    });
    console.log(task)
});

//Read

app.post("/get_list", async(req, res) => {
    const tasks = await toDoList.findAll();
    res.send(tasks);
});

//Update
app.post("/update_task/:id", async(req, res) => {
    const tasks = await toDoList.update(req.body, {
        where: {
            id:req.params.id
        }
    });
    res.send(tasks);
});

app.post("/delete_task/:id", async(req, res) => {
    const task = await toDoList.destroy({
        where: {
            id:req.params.id
        }
    });
    res.send("Deleted");
});





app.listen(PORT, console.log(`Listening on port ${PORT}`));