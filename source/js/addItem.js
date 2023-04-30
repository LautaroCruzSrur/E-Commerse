const form = document.querySelector("form");
const nombreProd = document.getElementById("nombre");
const precioProd = document.getElementById("precio");
const descripProd = document.getElementById("descripcion");
const urlProd = document.getElementById("url");
const botonEnviar = document.getElementById("submit");

console.log(nombreProd);
console.log(precioProd);

function codigoUnico() {
    let repeated;
    let regCode=[];

function random() {
  do {
    let code = parseInt(Math.random() * 999999);
    repeated = repeatedCode(code);
    if (!repeated) {
      regCode.push(code);
      return code;
    } else {
      repeated = false;
    }
  } while (!repeated);
}
function repeatedCode(code) {
  for (let i = 0; i < regCode.length; i++) {
    if (code === regCode[i]) {
      repeated = true;
      break;
    }
  }
  return repeated;
}
let codigoUnico = random();
 return codigoUnico;
}

form.addEventListener("submit", (evento) => {
    const productos = {
        // codigo: codigoUnico(),
        nombre: nombreProd.value ,
        precio: precioProd.value ,
        descripcion: descripProd.value ,
        imagen: urlProd.value,
    };
    
    console.log(productos);
});
