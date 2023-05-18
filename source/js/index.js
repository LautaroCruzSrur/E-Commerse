//import defaultExport from "./addItem.js"
const mostrarCatalogo = () => {
    cargarProductos();
    botonAgregar();
};

  const cargarProductos = () => {
    const arrayProducto = getArrayProducto();
    const listaProductoHTML = document.getElementById("catalogo");

    let productosHTML = ""; 

    for (const producto of arrayProducto) {
      productosHTML += productoHTML(producto);
    }

    listaProductoHTML.innerHTML = productosHTML;
  };

  const productoHTML = (producto) => {
    return ` <div class="col">
    <div class="card h-80">
      <a href="./source/html/producto.html">
      <img src="./source/img/${producto.foto}" class="card-img-top" alt="..."></a>
      <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
        <i id="btn-corazon-${producto.codigo}" class="bi bi-${producto.favorito ? 'heart-fill' : 'heart'}"></i>
        <p class="card-text">${producto.precio}</p>
      </div>
    </div>
  </div>`;
  };

  const botonAgregar = () => {
    const arrayProducto = getArrayProducto();
  
    for (const producto of arrayProducto) {
      const botonAgregarId = `btn-corazon-${producto.codigo}`;
      const botonAgregar = document.getElementById(botonAgregarId);
  
      botonAgregar.addEventListener("click", () => {
        const index = arrayProducto.findIndex((p) => p.codigo == producto.codigo);
        const productoEncontrado = arrayProducto[index];
  
        productoEncontrado.favorito = true;
  
        arrayProducto[index] = productoEncontrado;
  
        localStorage.setItem("productos", JSON.stringify(arrayProducto));
  
        botonAgregar.classList.remove("bi-heart")
        botonAgregar.classList.add("bi-heart-fill")
        mostrarProductos();
        
      });
    }
  };
  



  const getArrayProducto = () => {
    //Traigo los productos del storage (me los devuelve en string)
    const productos = localStorage.getItem("productos");
    
    // Convierto los productos a array
    const arrayProductos = JSON.parse(productos);
    
    return arrayProductos;
  };

  mostrarCatalogo();
