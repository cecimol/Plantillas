const express = require("express");
const { Router } = express;
const router = new Router();
const { readFileAsync, writeFileAsync } = require("../helpers");

router.get("/", (req, res) => {
  res.render("cargarProducto");
});

router.post("/productos", async (req, res) => {
  const productos = await readFileAsync("productos");
  let id = 1;
  if (productos.length > 0) {
    id = parseInt(productos[productos.length - 1].id) + 1;
  }
  const obj = {
    id: id.toString(),
    title: req.body.title,
    price: req.body.price,
    url: req.body.url,
  };
  productos.push(obj);
  await writeFileAsync("productos", productos);
  if (__socket) {
    console.log("emitiendo actualizar-productos");
    __socket.emit("actualizar-productos", productos);
  }
  res.redirect("/");
});

module.exports = router;
