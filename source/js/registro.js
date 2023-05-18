//Obtenemos el formulario de registro
const registerForm = document.getElementById('register-form');

//Añadimos un evento de escucha al formulario de registro
registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); //Prevenimos la acción por defecto del formulario

  //Obtenemos los valores de los campos del formulario
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  
  //Validaciones
  
  // Validamos que el nombre no este vacio
  if (!name) {
    alert('Por favor, introduce un nombre válido.');
    return;
  }
  //validamos que el nombre solo contenga letras y no Numeros
  if (/\d/.test(name)) {
    alert('El nombre de usuario no debe contener números.');
    return;
  }
  // Validamos que el nombre no contenga espacios en blanco
if (name.includes(' ')) {
  alert('El nombre de usuario no debe contener espacios en blanco.');
  return;
}

  // Validamos que el campo de correo electrónico no esté vacío y que tenga el formato correcto
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
  }

  // Validamos que el campo de contraseña no esté vacío y tenga al menos 8 caracteres
  if (!password || password.length < 8) {
    alert('La contraseña debe tener al menos 8 caracteres.');
    return;
  }

  //Obtenemos los usuarios registrados del LocalStorage
  let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  //Verificamos si el correo electrónico ya está registrado
  const userExists = registeredUsers.find(user => user.email === email);

  if (userExists) {
    alert('Este correo electrónico ya está registrado');
    return;
  }

  //Creamos un objeto con los datos del nuevo usuario
  const newUser = {
    name: name,
    email: email,
    password: password,
    role: 'invitado'
  };

  //Añadimos el nuevo usuario a la lista de usuarios registrados
  registeredUsers.push(newUser);

  //Actualizamos la lista de usuarios registrados en el LocalStorage
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

  //Mostramos la alerta de registro exitoso
  alert('Registro exitoso. Tu cuenta ha sido creada satisfactoriamente.');

  //Redirigimos al usuario a la página de inicio
  window.location.href = '../html/login.html';
});