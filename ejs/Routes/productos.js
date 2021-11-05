const express = require("express");

const { Router } = express;
const router = new Router();

let productos = require("../productos");

router.get("/", (req, res) => {
  res.render("cargarProducto");
});

router.get("/productos", (req, res) => {
  res.render("verProductos", { productos });
});

router.post("/productos", (req, res) => {
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
  res.redirect("/");
});

module.exports = router;
