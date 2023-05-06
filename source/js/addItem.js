const form = document.querySelector("form");
const nombreProd = document.getElementById("nombre");
const precioProd = document.getElementById("precio");
const descripProd = document.getElementById("descripcion");
const urlProd = document.getElementById("url");
const botonEnviar = document.getElementById("submit");
const table = document.getElementById("datetable");

let productos = [];

console.log(`El nombre del producto es ${nombreProd}`);
console.log("Hola esto es un console");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = nombreProd.value;
    let precio = precioProd.value;
    let descripcion = descripProd.value;
    let imagen = urlProd.value;
    let uuid = generateUUIDv4();

    const producto = {
        titulo: nombre ,
        precio: precio ,
        informacion: descripcion ,
        foto: imagen,
        codigo: uuid,
        favorito: false,
    };
       productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log("producto nuevo: ", productos);
   productview();
});


function productview(){
  table.querySelector("tbody").innerHTML = "";
  productos.forEach((producto) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>${producto.informacion}</td>
    <td>
    <button class="editar" data-id="">Editar</button>
    <button class="eliminar" data-id="">Eliminar</button> 
    </td>
  `;
    table.querySelector("tbody").appendChild(tr);
  });

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

// Ejemplo de uso

