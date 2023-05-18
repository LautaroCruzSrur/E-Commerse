const mostrarProductos = () => {
    cargarProductos();
    botonesQuitarDeseado();
};

const cargarProductos = () => {
  // voy a escribir un par de cosas, a ver si te da una idea
  // no se si va a funcionar, tenes que probar

  // Aqui busca el elemento con id = productos en el html
  
  const listaDeseadosHTML = document.getElementById("productos");
  let deseadosHTML = ""; //variable auxiliar

  const arrayDeseados = getArrayDeseados();

  // Empiezo a recorrer todos los productos del listado
  for (const producto of arrayDeseados) {
    // Chequeo si el producto está marcado como favorito
    deseadosHTML += productoDeseadoHTML(producto);
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
            <img src="${producto.foto}" class="card-img-top" alt="..."></a>
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">${producto.precio}</p>
                
                <a href="#" class="btn btn-danger" id="btn-quitar-${producto.codigo}">Quitar</a>
            </div>
        </div>
    </div>`;
};

const botonesQuitarDeseado = () => {
  const arrayDeseados = getArrayDeseados();

  for (const producto of arrayDeseados) {
    const botonQuitarId = `btn-quitar-${producto.codigo}`;
    const botonQuitar = document.getElementById(botonQuitarId);

    botonQuitar.addEventListener("click", () => {
      const arrayProductos = getArrayProductos();
      const index = arrayProductos.findIndex((p) => p.codigo == producto.codigo);
      const productoEncontrado = arrayProductos[index];

      productoEncontrado.favorito = false;

      arrayProductos[index] = productoEncontrado;

      localStorage.setItem("productos", JSON.stringify(arrayProductos));

      mostrarProductos();
    });
  }
};

const getArrayProductos = () => {
  //Traigo los productos del storage (me los devuelve en string)
  const productos = localStorage.getItem("productos");
  
  // Convierto los productos a array
  const arrayProductos = JSON.parse(productos);
  
  return arrayProductos;
};

const getArrayDeseados = () => {
  //Traigo los productos del storage (me los devuelve en string)
  const productos = localStorage.getItem("productos");
  
  // Convierto los productos a array
  const arrayProductos = JSON.parse(productos)

  // Selecciono los deseados y los agrego a otro array

  const arrayDeseados = []

  for(const producto of arrayProductos) {
    if (producto.favorito === true) {
      arrayDeseados.push(producto);
    }
  }
  
  return arrayDeseados;
};


mostrarProductos();




