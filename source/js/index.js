// Obtener el botón de logout
const logoutButton = document.getElementById('logout-btn');

// Agregar un evento de escucha al botón de logout
logoutButton.addEventListener('click', function() {
  // Borrar el usuario actual del localStorage
  localStorage.removeItem('currentUser');

  // Redirigir al usuario a la página de registro
  window.location.href = '../html/registro.html';
});