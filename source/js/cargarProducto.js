//localStorage.setItem("productoDetalle", "248861ee-a8f1-4aab-8cde-e39581b1dfcc");
let nombre = document.getElementById("nombreP");
let precio = document.getElementById("precioP");
let categoria = document.getElementById("categoriaP");
let descripcion = document.getElementById("descripcionP");
let foto = document.getElementById("imagenP");
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
    categoria.innerHTML =  producto.categoria;
    descripcion.innerHTML = producto.informacion;
    foto.innerHTML = `<img src="${producto.foto}" class="d-block w-100" alt=''>`
}