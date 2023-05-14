let nombre = document.getElementById("nombreP");
let precio = document.getElementById("precioP");
let categoria = document.getElementById("categoriaP");
let descripcion = document.getElementById("descripcionP");

console.log(recuperarProductos());
cargarProducto();

function recuperarProductos(){
    let todosProductos= JSON.parse(localStorage.getItem("productos"));
    return todosProductos[0];
}

function cargarProducto(){
    let producto = recuperarProductos();

    nombre.innerHTML = producto.titulo;
    precio.innerHTML = "$" + producto.precio;
    categoria.innerHTML =  producto.categoria;
    descripcion.innerHTML = producto.informacion;
}