require("dotenv").config();
const express = require("express") 
const app = express() 
const token = process.env.API_KEY;
const URL = process.env.URL;

const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(URL, token)

app.use(express.json());

const PORT = 3000 

//Route to add stock
app.post("/newStock", async (req, res) => {
    const { data, error } = await supabase.from("stockInfo").insert(req.body)
    console.log(req.body)
    res.send(data)
  });

  // Route to delete stock
app.delete("/deleteStock/:id", async (req, res) => {
    const id = req.params.id;
    const { data, error } = await supabase
    .from('stockInfo')
    .delete()
    .match({id: id});
    res.send(data)
});

// Route to update individual stock
app.put("/updateStock/:id", async (req, res) => {
    const id = req.params.id
    const { data, error } = await supabase
    .from('stockInfo')
    .update(req.body)
    .match({id: id});
    res.send(data)

})

// Route to update many
app.put("/updateMany/:", async (req, res) => {
    const { data, error } = await supabase
    .from("stockInfo")
    .upsert({data})
})

//Route to view stock info
app.get("/viewStock", async (req, res) => {
    const { data, error } = await supabase
    .from("stockInfo")
    .select()
    res.send(data)
})

//Route to view specific stock

app.get("/viewStockById/:id", async (req, res) => {
    console.log()
    const id = req.params.id
    const { data, error } = await supabase
    .from("stockInfo")
    .select().match({id: id})
    res.send(data)
})

app.listen(PORT, console.log(`Listening on ${PORT}`)) 