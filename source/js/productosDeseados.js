const deseados = [
    {
        id: 1,
        nombre: 'Silla 1 classic',
        image: 'chair-classic.png'
    },
    {
        id: 2,
        nombre: 'Silla 2 standard',
        image: 'chair-standard.png'
    },
    {
        id: 3,
        nombre: 'Silla 3 ejecutive',
        image: 'chair-ejecutive.png',
    },
    {
        id: 4,
        nombre: 'Silla 4 gammer',
        image: 'chair-gammer.png'
    }
]

const prepararLocalStorage = () => {
    localStorage.clear();
    for (const producto of deseados) {
        localStorage.setItem("deseados", JSON.stringify(deseados))
    }
}

const mostrarProductosDeseados = () => {
    cargarProductosDeseados();
    botonesQuitarDeseado();
};

const cargarProductosDeseados = () => {
    const listaDeseadosHTML = document.getElementById("listaDeseados");
    let deseadosHTML = "";

    const listadoDeseados = localStorage.getItem("deseados");

    const parsedDeseados = JSON.parse(listadoDeseados)
  
    for (const producto of parsedDeseados) {
      deseadosHTML += productoDeseadoHTML(producto);
    }
  
    listaDeseadosHTML.innerHTML = deseadosHTML;
};

const productoDeseadoHTML = (producto) => {
    return `
    <div class="col">
        <div class="card h-80">
            <a href="./source/html/producto.html">
            <img src="../img/${producto.image}" class="card-img-top" alt="..."></a>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"> precio: $78,000</p>
                
                <a href="#" class="btn btn-danger" id="btn-quitar-${producto.id}">Quitar</a>
            </div>
        </div>
    </div>`;
};

const botonesQuitarDeseado = () => {
    const listadoDeseados = localStorage.getItem("deseados");
    const parsedDeseados = JSON.parse(listadoDeseados)

    for (const producto of parsedDeseados) {
      const botonQuitarId = `btn-quitar-${producto.id}`;
      const botonQuitar = document.getElementById(botonQuitarId);
  
      botonQuitar.addEventListener("click", () => {
        const index = parsedDeseados.findIndex((p) => p.id == producto.id);
        parsedDeseados.splice(index, 1);
        localStorage.removeItem("deseados");
        localStorage.setItem("deseados", JSON.stringify(parsedDeseados));

        mostrarProductosDeseados();
      });
    }
};
prepararLocalStorage();
mostrarProductosDeseados();


