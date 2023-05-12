

const form = document.querySelector("form");
const nombreProd = document.getElementById("nombre");
const precioProd = document.getElementById("precio");
const descripProd = document.getElementById("descripcion");
const urlProd = document.getElementById("url");
const botonEnviar = document.getElementById("submit");
const table = document.getElementById("datetable");
const tituloModal = document.getElementById("exampleModalLabel");
const textModal = document.getElementsByClassName("modal-title");
 
 

export let productos = [];




console.log(`El nombre del producto es ${nombreProd}`);
console.log("Hola esto es un console");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let titulo = nombreProd.value;
  let precio = precioProd.value;
  let informacion = descripProd.value;
  let foto = urlProd.value;
  const modo = form.dataset.mode;
  const editId = form.dataset.editId;

  if (modo === "add") {
    let codigo = generateUUIDv4();
  const producto = {
    titulo,
    precio,
    informacion,
    foto,
    codigo,
    favorito: false,
  };
     productos.push(producto);
     console.log("producto nuevo: ", productos);
     tituloModal.textContent = 'Nuevo Producto';
     textModal.innerHTML="Se a Ingresado un nuevo producto.";
     
     
  } else if (modo === "editar") {
    const index = productos.findIndex((producto) => producto.codigo === editId); // Buscamos el indice del producto a editar
    if (index !== -1) {
      // Si el producto existe
      const product = productos[index]; // Obtenemos el producto a editar del array
      product.titulo = titulo;
      product.precio = precio;
      product.informacion = informacion;
      product.foto = foto;
    }
  }
  form.reset(); // Reseteamos el formulario
  form.dataset.mode = "add"; // Cambiamos el modo del boton
  botonEnviar.textContent = "enviar";
  productview();
});



table.addEventListener("click", (e) => {
  if (e.target.classList.contains("editar")) {
    // Si el elemento clickeado tiene la clase editar
    const id = e.target.dataset.id; // Obtenemos el id del producto a editar
    const producto = productos.find((producto) => producto.codigo === id); // Buscamos el producto a editar
    if (producto) {
      document.getElementById("nombre").value = producto.titulo; // Seteamos el valor del input nombre
      document.getElementById("precio").value = producto.informacion; // Seteamos el valor del input precio
      document.getElementById("descripcion").value = producto.informacion; // Seteamos el valor del input descripcion
      document.getElementById("url").value = producto.foto;

      form.dataset.mode = "editar"; // Cambiamos el modo del formulario
      form.dataset.editId = id; // Seteamos el id del producto a editar
      botonEnviar.textContent = "Editar"; // Cambiamos el texto del boton
    }
  }
});
table.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const id = e.target.dataset.id; // Obtenemos el id del producto a eliminar
    const index = productos.findIndex((producto) => producto.codigo === id);
    if (index !== -1) {
      productos.splice(index, 1);
      //agregar la funcion para actualizar la lista de productos.
      productview()
    }
  }
});

function productview() {
  table.querySelector("tbody").innerHTML = "";
  productos.forEach((producto) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>${producto.informacion}</td>
    <td>
    <button class="editar btn btn-warning" data-id="${producto.codigo}">Editar</button>
    <button class="eliminar btn btn-danger" btn btn-danger data-id="${producto.codigo}">Eliminar</button> 
    </td>
  `;
    table.querySelector("tbody").appendChild(tr);
    localStorage.setItem("productos", JSON.stringify(productos));

  });
}
const obtenerProductos = localStorage.getItem("productos");

if (obtenerProductos) {
  productos = JSON.parse(obtenerProductos);
  productview();
}


function generateUUIDv4() {
  let uuid = "", randomValue;
  for (let i = 0; i < 32; i++) {
    randomValue = (Math.random() * 16) | 0;
    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-";
    }
    uuid += (i == 12 ? 4 : i == 16 ? (randomValue & 3) | 8 : randomValue).toString(
      16
    );
  }
  return uuid;
}



