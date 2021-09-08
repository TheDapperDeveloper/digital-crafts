const express = require ("express");
const app = express();
const PORT = 3002;
// const student = { name: "Brande"}

const students = [
    { name: "Brande"},
    { name: "Anissa"},
    { name: "Tanya"},
]

const es6Renderer = require("express-es6-template-engine") //install tool 
app.engine('html', es6Renderer); // render html using the tool
app.set('views', 'templates'); // here is where I'll store html
app.set('view engine', 'html'); // read html

// code above allows server to return HTML files 

app.listen(PORT, console.log(`Listening on port ${PORT}`));

app.get("/", (req, res) => {
    let list = `<ul>`
    for (let student of students){
        list += `<li>
            <p> ${student.name} </p>
        </li>
        `;
    }
    list += `</ul>`;
    console.log(list);

   res.render("home", {
       locals: {
        student:list,
       },
   });
});