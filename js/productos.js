let btnDetalles = document.getElementById("btnDetalles");
let btnEspecificaciones = document.getElementById("btnEspecificaciones");

function detalles(){
    btnDetalles.className="w-100 h-100 p-2 buttonSwitch_select"
    btnEspecificaciones.className="w-100 h-100 p-2 buttonSwitch_noselect"
}

function especificaciones(){
    btnDetalles.className="w-100 h-100 p-2 buttonSwitch_noselect"
    btnEspecificaciones.className="w-100 h-100 p-2 buttonSwitch_select"
}

btnDetalles.onclick=detalles;
btnEspecificaciones.onclick=especificaciones;