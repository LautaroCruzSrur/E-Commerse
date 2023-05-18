let nombre = document.getElementById("nombreP");
let precio = document.getElementById("precioP");
let categoria = document.getElementById("categoriaP");
let descripcion = document.getElementById("descripcionP");
let foto = document.getElementById("imagenP");
let iconHeart = document.getElementById("iconHeart");
let buttonHeart = document.getElementById("buttonHeart");

let producto = recuperarProducto(localStorage.getItem("productoDetalle"));


cargarProducto(producto);

function recuperarProducto(codigo){

    //Recupera todos los productos
    let todosProductos= JSON.parse(localStorage.getItem("productos"));

    let productoEncontrado;
    
    //busca el producto solicitado
    todosProductos.forEach(function(todosProductos) {
        if (todosProductos.codigo === codigo) {
          productoEncontrado = todosProductos;
        }
      });
      return productoEncontrado;
}

function cargarProducto(producto){
    nombre.innerHTML = producto.titulo;
    precio.innerHTML = "$" + producto.precio;
    categoria.innerHTML =  "";
    descripcion.innerHTML = producto.informacion;
    foto.innerHTML = `<img src="${producto.foto}" class="d-block w-100" alt=''>`
    if (producto.favorito == true){
      iconHeart.style.color="red";
    } else {
      iconHeart.style.color="gray";
    }
}

buttonHeart.onclick= () => {
    // Recuperar todos los productos
    let todosProductos = JSON.parse(localStorage.getItem("productos"));
    codigo=localStorage.getItem("productoDetalle");
    
    todosProductos.forEach(function(todosProductos) {
      if (todosProductos.codigo === codigo) {
        console.log("Encontrado");
        if (todosProductos.favorito == false){
          todosProductos.favorito = true;
          console.log("cambiado a true");

        } else {
          todosProductos.favorito = false;
          console.log("cambiado a false");
        }
      }
    });
    
      // Guardar el array de productos actualizado en el Local Storage
      localStorage.setItem("productos", JSON.stringify(todosProductos));
      cargarProducto(recuperarProducto(localStorage.getItem("productoDetalle")));
  }
  

