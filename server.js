const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const Contenedor = require("./index.js");
const productos = Contenedor.getAll();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.get("/productosRandom", (req, res) => {
  item = productos[Math.round(Math.random() * 4)];
  res.json(productos);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
