const express = require("express");
const fs = require("fs");
const pokemons = require("./pokemon.json");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para anilizar el "body" de la solicitud
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>WEB SERVER IS UP AND RUNNING</h1>");
});

app.get("/pokemons", (req, res) => {
  res.status(200).json(pokemons);
});

app.post("/new", (req, res) => {
  // Es requerido el uso de middleware previamente.
  const data = req.body;
  const timeStamp = Date.now();

  fs.writeFile(`./new_list_${timeStamp}.json`, JSON.stringify(data), (err) => {
    err
      ? console.log("Error writing file")
      : console.log("New list was created successfully");
  });
  res.status(201).json({ message: "New list was created successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
