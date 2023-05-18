const mostrarProductos = () => {
    cargarProductos();
    botonesQuitarDeseado();
};

const cargarProductos = () => {
  // voy a escribir un par de cosas, a ver si te da una idea
  // no se si va a funcionar, tenes que probar

  // Aqui busca el elemento con id = productos en el html
  // Esto hay que chequear, no me acuerdo si en la vista de deseados
  // ese elemento se llama productos o si tiene otro nombre producto
  const listaDeseadosHTML = document.getElementById("productos");
  let deseadosHTML = "";

  const arrayProductos = getArrayProductos();

  // Empiezo a recorrer todos los productos del listado
  for (const producto of arrayProductos) {
    // Chequeo si el producto está marcado como favorito
    if (producto.favorito === true) {
      // Si es un favorito, le paso el producto a la funcion
      // que agrega el html a la pantalla
      deseadosHTML += productoDeseadoHTML(producto);// esto queda asi ? Si, queda asi
    }
  }

  // Todo el html de las cards que se fue generando en el bucle for, se agrega al 
  // elemento de la vista de deseados
  listaDeseadosHTML.innerHTML = deseadosHTML;
};

const productoDeseadoHTML = (producto) => {
    return `
    <div class="col">
        <div class="card h-80">
            <a href="./source/html/producto.html">
            <img src="../img/chair-ejecutive.png" class="card-img-top" alt="..."></a>
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.precio}</p>
                
                <a href="#" class="btn btn-danger" id="btn-quitar-${producto.codigo}">Quitar</a>
            </div>
        </div>
    </div>`;
};

const botonesQuitarDeseado = () => {
  const arrayProductos = getArrayProductos();

  for (const producto of arrayProductos) {
    const botonQuitarId = `btn-quitar-${producto.codigo}`;
    const botonQuitar = document.getElementById(botonQuitarId);

    botonQuitar.addEventListener("click", () => {
      const index = arrayProductos.findIndex((p) => p.codigo == producto.codigo);
      const productoEncontrado = arrayProductos[index];

      productoEncontrado.favorito = false;

      arrayProductos[index] = productoEncontrado;

      localStorage.setItem("productos", JSON.stringify(arrayProductos));

      mostrarProductos();
    });
  }
};

const getArrayProductos = ()  => {
  //Traigo los productos del storage (me los devuelve en string)
  const productos = localStorage.getItem("productos");
  
  // Convierto los productos a array
  const arrayProductos = JSON.parse(productos)
  
  return arrayProductos;
}

mostrarProductos();

// Ejecutar este codigo en la consola para cargar productos de prueba
/*
const cargarProductoPrueba = () => {
  localStorage.clear();
  stringPrueba = '[{"titulo":"favorito","precio":"11111","informacion":"info favorito","foto":"jjddndn","codigo":"c35efb43-e211-47c1-a958-0f9ea3ea293e","favorito":true},{"titulo":"no favorito ","precio":"22222","informacion":"info no favorito","foto":"ljbjb","codigo":"aaf798cf-a98a-4718-abcc-15e17db66560","favorito":false}]'
  
  localStorage.setItem('productos', stringPrueba);
}

cargarProductoPrueba();
*/



