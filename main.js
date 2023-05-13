const productos = [
    {
      categoria: 'Clasica',
      nombre: 'Chair-Classic',
      descripcion: 'Descripción del producto',
      imagen: 'img/chair-classic.png',
      precio: 55000
    },
    
    {
        categoria: 'Estandar',
        nombre: 'Chair-Standard',
        descripcion: 'Descripción del producto',
        imagen: 'img/chair-standard.png',
        precio: 35000
    },
    
    {
        categoria: 'Ejecutivo',
        nombre: 'Chair-ejecutive',
        descripcion: 'Descripción del producto',
        imagen: 'img/chair-ejecutive.png',
        precio: 45000
    },

    {
      categoria: 'Gamer',
      nombre: 'Chair-Gamer',
      descripcion: 'Descripción del producto',
      imagen: 'img/chair-gammer.png',
      precio: 75000
  }

  ];

function insertarCards(productos){
    
    productos.forEach(producto => {
        const card = `
        <div class="col">
          <div class="card h-80 bg-dark" id="container-cards">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body bg-dark">
              <h5 class="card-title text-white">${producto.nombre}</h5>
              <p class="card-text text-white">$${producto.precio}</p>
              <a href="#" class="btn btn-danger text-center"><h5>Comprar</h5></a>
            </div>
          </div>
        </div>  
        `;
        
        document.getElementById("columna-cards").innerHTML += card;
      });

} 
  
  insertarCards(productos);

  function filtrarCards(productos){
    
    const productosFiltrados = productos.filter(producto => producto.categoria === 'Ejecutivo'); //Filtra clase Ejecutivo
    document.getElementById("columna-cards").innerHTML = '';
    insertarCards(productosFiltrados);

  }

  function ordenarCards(productos){

    productos.sort((a, b) => a.precio - b.precio); //ordena de menor a mayor
    document.getElementById("columna-cards").innerHTML = '';
    insertarCards(productos);

  }

  //cscscs