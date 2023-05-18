const form = document.querySelector("form");
const nombreProd = document.getElementById("nombre");
const precioProd = document.getElementById("precio");
const descripProd = document.getElementById("descripcion");
const urlProd = document.getElementById("url");
const botonEnviar = document.getElementById("submit");
const table = document.getElementById("datetable");
const nombreRegex = /^[A-Za-z\s]{2,}$/;
const precioRegex = /^\d+(\.\d{1,2})?$/;
const urlRegex = /^(ftp|http|https):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
const descripcionRegex = /^[\w\s]{2,}$/;


let productos = [];
console.log(productos);

console.log(`El nombre del producto es ${nombreProd}`);
console.log("Hola esto es un console");



form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validarFormulario()) {
    const titulo = nombreProd.value;
    const precio = precioProd.value;
    const informacion = descripProd.value;
    const foto = urlProd.value;
    const modo = form.dataset.mode;
    const editId = form.dataset.editId;

    if (modo === "add") {
      const codigo = generateUUIDv4();
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
      // Realizar acciones adicionales cuando se agrega un producto
    } else if (modo === "editar") {
      const index = productos.findIndex((producto) => producto.codigo === editId);
      if (index !== -1) {
        const producto = productos[index];
        producto.titulo = titulo;
        producto.precio = precio;
        producto.informacion = informacion;
        producto.foto = foto;
        // Realizar acciones adicionales cuando se edita un producto
      }
    }

    form.reset();
    form.dataset.mode = "add";
    botonEnviar.textContent = "Enviar";
    productview();
  }
});


  table.addEventListener("click", (e) => {
    if (e.target.classList.contains("editar")) {
      // Si el elemento clickeado tiene la clase editar
      const id = e.target.dataset.id; // Obtenemos el id del producto a editar
      const producto = productos.find((producto) => producto.codigo === id); // Buscamos el producto a editar
      if (producto) {
        document.getElementById("nombre").value = producto.titulo; // Seteamos el valor del input nombre
        document.getElementById("precio").value = producto.precio; // Seteamos el valor del input precio
        document.getElementById("descripcion").value = producto.informacion; // Seteamos el valor del input descripcion
        document.getElementById("url").value = producto.foto;
  
        form.dataset.mode = "editar"; // Cambiamos el modo del formulario
        form.dataset.editId = id; // Seteamos el id del producto a editar
        botonEnviar.textContent = "Editar"; // Cambiamos el texto del boton
        modal(); 
        
      }
    }
  });
  
  table.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
      const id = e.target.dataset.id;
      const index = productos.findIndex((producto) => producto.codigo === id);
      if (index !== -1) {
        let confirmacion = document.getElementById("confirmDelet");
          confirmacion.addEventListener("click", (e) => {
            confirmacion = "true";
            if (confirmacion === "true") { // Verificar el valor como cadena de texto
              productos.splice(index, 1);
              productview();
            }
          });
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
    <button class="editar enviar btn btn-warning m-1"  data-id="${producto.codigo}">Editar</button>
    <button class="eliminar btn btn-danger m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${producto.codigo}">Eliminar</button> 
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

function modal() {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const editButtons = document.getElementsByClassName("editar");
    const submitButtons = document.getElementsByClassName("enviar");
    console.log(submitButtons);
    const cancel = document.getElementById("cancel");
  
    btn.onclick = function(event) {
        if (event.target.id === "myBtn" || event.target.classList.contains("editar")) {
          modal.style.display = "block";
        }
      };
    
      for (const editButton of editButtons) {
        editButton.onclick = function(event) {
          if (event.target.classList.contains("editar")) {
            modal.style.display = "block";
          }
        };
      }
      submitButtons.onclick = function() {
        modal.style.display = "none";
        form.reset();
      };
    
      cancel.onclick = function() {
        modal.style.display = "none";
        botonEnviar.textContent = "Enviar";
        form.reset();
      };
    
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          form.reset();
          botonEnviar.textContent = "Enviar";
        }
      };
    }
    
    modal();


    function NoDelet() {
      const arrayLS = JSON.parse(localStorage.getItem("productos"));
      console.log(arrayLS);
      if (arrayLS.length > 1) {
        console.log();
      } else {
        const delet = document.getElementsByClassName("eliminar");
        for (let i = 0; i < delet.length; i++) {
          delet[i].style.display = "none";
        }
      }
    }
    
    NoDelet();
    
   
    function validarCampo(input, regex) {
      const valor = input.value.trim();
      return regex.test(valor);
    }
    
    function validarFormulario() {
      const nombreInput = document.getElementById("nombre");
      const precioInput = document.getElementById("precio");
      const urlInput = document.getElementById("url");
      const descripcionInput = document.getElementById("descripcion");
    
      const esNombreValido = validarCampo(nombreInput, nombreRegex);
      const esPrecioValido = validarCampo(precioInput, precioRegex);
      const esURLValida = validarCampo(urlInput, urlRegex);
      const esDescripcionValida = validarCampo(descripcionInput, descripcionRegex);
    
      if (!esNombreValido) {
        // El nombre es inválido
        // Realizar acciones correspondientes, como mostrar un mensaje de error
        return false;
      }
    
      if (!esPrecioValido) {
        // El precio es inválido
        // Realizar acciones correspondientes, como mostrar un mensaje de error
        return false;
      }
    
      if (!esURLValida) {
        // La URL de la imagen es inválida
        // Realizar acciones correspondientes, como mostrar un mensaje de error
        return false;
      }
    
      if (!esDescripcionValida) {
        // La descripción breve es inválida
        // Realizar acciones correspondientes, como mostrar un mensaje de error
        return false;
      }
    
      // El formulario es válido
      return true;
    }