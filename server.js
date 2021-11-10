const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const { readFileAsync } = require("./helpers");

// configuracion del socket para usarlo globalmente
global.__socket = null;

// configuracion para usar form
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// configuracion de engine de vistas
app.set("view engine", "hbs");
app.set("views", "./views");

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
);

// configuracion de rutas
const productosRoutes = require("./Routes/productos");
app.use("/", productosRoutes);
const chatRoutes = require("./Routes/chat");
app.use("/chat", chatRoutes);
app.use(express.static(`${__dirname}/public`));

// configuracion socket io
const http = require("http");
const router = require("./Routes/productos");
const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", async (socket) => {
  console.log("Conectado al socket");
  global.__socket = socket;
  const productos = await readFileAsync("productos");
  const chat = await readFileAsync("chat");
  console.log("emitiendo actualizar-productos");
  socket.emit("actualizar-productos", productos);
  console.log("emitiendo actualizar-chat");
  socket.emit("actualizar-chat", chat);
});

server.listen(8080, () => {
  console.log("Server Handlebars Escuchando puerto 8080");
});
