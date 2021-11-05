const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "./views");

const productosRoutes = require("./Routes/productos");

app.use("/", productosRoutes);

app.listen(8083, () => {
  console.log("Server ejs Escuchando puerto 8083");
});
