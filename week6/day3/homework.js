require("dotenv").config();
const express = require("express") //S
const app = express() //S
const token = process.env.API_KEY;
const URL = process.env.URL;

const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(URL, token)

app.use(express.json());

const PORT = 3000 //S

app.post("/newStock", async (req, res) => {
    const { data, error } = await supabase.from("stockInfo").insert(req.body)
    console.log(req.body)
    res.send(data)
  });

app.delete("/deleteStock/:id", async (req, res) => {
    const id = req.params.id;
    const { data, error } = await supabase
    .from('stockInfo')
    .delete()
    .match({id: id});
    res.send(data)
});

app.put("/updateStock/:id", async (req, res) => {
    const id = req.params.id
    const { data, error } = await supabase
    .from('stockInfo')
    .update(req.body)
    .match({id: id});
    res.send(data)

})

app.get("/viewStock", async (req, res) => {
    const { data, error } = await supabase
    .from("stockInfo")
    .select()
    res.send(data)
})

app.get("/viewStockById/:id", async (req, res) => {
    console.log()
    const id = req.params.id
    const { data, error } = await supabase
    .from("stockInfo")
    .select().match({id: id})
    res.send(data)
})

app.listen(PORT, console.log(`Listening on ${PORT}`)) //S