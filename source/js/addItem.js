const form = document.querySelector("form");
const nombreProd = document.getElementById("nombre");
const precioProd = document.getElementById("precio");
const descripProd = document.getElementById("descripcion");
const urlProd = document.getElementById("url");
const botonEnviar = document.getElementById("submit");

console.log(`El nombre del producto es ${nombreProd}`);
console.log("Hola esto es un console");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  function random() {
    let arraycode=[];
    while (arraycode.length < 8) {
      let codigo = parseInt(Math.random() * 99999);
      if (!arraycode.includes(codigo)) {
        arraycode.push(codigo);
      }
    }
    return arraycode;
  }
  function numeroUnico(){
    let array = random();
    let unico;
    // for(let i = 0 ; i <= array.length; i++){
    //    unico = array[i];
    // }
    unico = array[array.length-1];
    console.log(`Hola ${unico}`);
    return unico;
  }
    const productos = {
        nombre: nombreProd.value ,
        precio: precioProd.value ,
        descripcion: descripProd.value ,
        imagen: urlProd.value,
        codigo: numeroUnico(),
    };
    
    console.log("producto nuevo: ", productos);
});
