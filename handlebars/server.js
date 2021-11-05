const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", "./views");

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
);

const productosRoutes = require("./Routes/productos");

app.use("/", productosRoutes);

app.listen(8081, () => {
  console.log("Server Handlebars Escuchando puerto 8081");
});
