//Obtenemos el formulario de inicio de sesión
const loginForm = document.getElementById('login-form');

//Añadimos un evento de escucha al formulario de inicio de sesión
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); //Prevenimos la acción por defecto del formulario

  //Obtenemos los valores de los campos del formulario
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //Obtenemos los usuarios registrados del LocalStorage
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  //Verificamos si el usuario y contraseña son válidos
  const currentUser = registeredUsers.find(user => user.email === email  && user.password === password);

  if (!currentUser) {
    alert('El correo electrónico o la contraseña son incorrectos');
    return;
  }

  //Almacenamos la información del usuario en el LocalStorage para mantener su sesión activa
  localStorage.setItem('currentUser', JSON.stringify(currentUser));

  //Redirigimos al usuario a la página de inicio
  window.location.href = '.../index.html';
});

//creando el usuario Admin
document.querySelector('#login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  if(email === 'admin@admin' && password === 'admin') {
      // redirigir a la página de administración
      window.location.href = '../html/admin.html';
  } else {
      // código para validar y redirigir a la página de usuarios registrados
  }
});