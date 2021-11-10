const express = require("express");
const { Router } = express;
const router = new Router();
const { readFileAsync, writeFileAsync } = require("../helpers");

router.post("/", async (req, res) => {
  const chat = await readFileAsync("chat");
  const obj = {
    email: req.body.email,
    mensaje: req.body.mensaje,
  };
  chat.push(obj);
  await writeFileAsync("chat", chat);
  if (__socket) {
    console.log("emitiendo actualizar-chat");
    __socket.emit("actualizar-chat", chat);
  }
  res.redirect("/");
});

module.exports = router;
