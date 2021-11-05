const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "./views");

const productosRoutes = require("./Routes/productos");

app.use("/", productosRoutes);

app.listen(8082, () => {
  console.log("Server PUG Escuchando puerto 8082");
});
