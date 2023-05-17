// const user = JSON.parse(localStorage.getItem("currentUser"));
// console.log(user.role);
// if(user.role == "invitado"){
//   window.location.href='./source/html/registro.html';
// } control de usuario
const productos = JSON.parse(localStorage.getItem("productos")) || [];
const button = document.getElementById("insert");

// Obtener el botón de logout
const logoutButton = document.getElementById('logout-btn');

// Agregar un evento de escucha al botón de logout
logoutButton.addEventListener('click', function() {
  // Borrar el usuario actual del localStorage
  localStorage.removeItem('currentUser');


  // Redirigir al usuario a la página de registro
  window.location.href = '/source/html/registro.html';
});
// valores nuevos
console.log("hola mundo");
console.log(productos);
 function insertarCards(productos){
    
  productos.forEach(producto => {
       const card = `
       <div class="col">
      <div class="card h-80 bg-dark" id="container-cards">
        <img src="${producto.foto}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body bg-dark">
          <h5 class="card-title text-white">${producto.titulo}</h5>
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

function mostrarNombreUsuario() {
  // Obtener el usuario actual del localStorage
  const user = JSON.parse(localStorage.getItem("currentUser"));
  // Verificar si hay un usuario conectado
  if (user && user.nombre) {
    const userGreeting = document.getElementById("user-greeting");
    userGreeting.textContent = "Hola, " + user.nombre;
  }
}

// Llamar a la función para mostrar el nombre del usuario
mostrarNombreUsuario();

