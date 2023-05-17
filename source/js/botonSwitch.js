//Declaración de variables
let btnDetalles = document.getElementById("btnDetalles");
let btnEspecificaciones = document.getElementById("btnEspecificaciones");
//let descripcionProducto = document.getElementById("descripcionP");

//Llamada de funciones


//Funciones
function detalles(){
    btnDetalles.className="w-100 h-100 p-2 buttonSwitch_select"
    btnEspecificaciones.className="w-100 h-100 p-2 buttonSwitch_noselect"
    descripcion.innerHTML = producto.informacion;
}

function especificaciones(){
    btnDetalles.className="w-100 h-100 p-2 buttonSwitch_noselect"
    btnEspecificaciones.className="w-100 h-100 p-2 buttonSwitch_select"
    descripcion.innerHTML = producto.especificaciones;
}

//Eventos
btnDetalles.onclick=detalles;
btnEspecificaciones.onclick=especificaciones;