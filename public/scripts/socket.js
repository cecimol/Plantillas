const socket = io();

socket.on("actualizar-productos", (productos) => {
  console.log("actualizar-productos");
  if (productos.length > 0) {
    const tableBody = document.getElementById("tbody-productos");
    let html = "";
    productos.forEach((producto) => {
      html =
        html +
        `<tr>
            <td>${producto.title}</td>
            <td>${producto.price}</td>
            <td>
            <img
                src="${producto.url}"
                alt="Imagen Producto"
                class="img-thumbnail"
            />
            </td>
        </tr>
        `;
    });
    tableBody.innerHTML = html;
  }
});

socket.on("actualizar-chat", (chat) => {
  console.log("actualizar-chat");
  if (chat.length > 0) {
    const tableBody = document.getElementById("tbody-chat");
    let html = "";
    chat.forEach((mensaje) => {
      html =
        html +
        `<tr>
              <td>${mensaje.email}</td>
              <td>${mensaje.mensaje}</td>              
          </tr>
          `;
    });
    tableBody.innerHTML = html;
  }
});
