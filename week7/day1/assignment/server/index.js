const express = require("express");
const app = express();
const creds = require("./db")


const PORT = 3000;

app.use(express.json());

app.post("/insertRestaurant", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query(`INSERT INTO restaurants (id, name) VALUES (${req.body.id}, '${req.body.name}')`, (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result);
      });
    });
  });

app.get("/getRestaurant", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query("SELECT * FROM restaurants", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

  app.post("/insertMovie", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query(`INSERT INTO movies (id, name) VALUES (${req.body.id}, '${req.body.name}')`, (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result);
      });
    });
  });

app.get("/getMovie", (req, res) => {
    creds.connect((err, client, release) => {
      if (err) {
        return console.error("Error getting connected to the client", err.stack);
      }
      client.query("SELECT * FROM movies", (err, result) => {
        if (err) {
          res.status(400).send(err.stack);
        }
        res.status(200).send(result.rows);
      });
    });
  });

  app.listen(PORT, console.log(`Listening on port ${PORT}`));

