// Obtener el botón de logout
const logoutButton = document.getElementById('logout-btn');

// Agregar un evento de escucha al botón de logout
logoutButton.addEventListener('click', function() {
  // Borrar el usuario actual del localStorage
  localStorage.removeItem('currentUser');

  // Redirigir al usuario a la página de registro
  window.location.href = '../html/registro.html';
});

// Obtenemos la lista de usuarios registrados del LocalStorage
const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

// Obtenemos la tabla donde mostraremos los usuarios
const userList = document.getElementById('user-list');

// Recorremos la lista de usuarios registrados y creamos una fila para cada uno
registeredUsers.forEach(function(user) {
	// Creamos una nueva fila
	const row = document.createElement('tr');

	// Agregamos el nombre del usuario
	const nameCell = document.createElement('td');
	nameCell.innerText = user.name;
	row.appendChild(nameCell);

	// Agregamos el correo electrónico del usuario
	const emailCell = document.createElement('td');
	emailCell.innerText = user.email;
	row.appendChild(emailCell);

	// Agregamos el rol del usuario
	const roleCell = document.createElement('td');
	roleCell.innerText = user.role;
	row.appendChild(roleCell);

	// Agregamos el botón de editar
const editButtonCell = document.createElement('td');
const editButton = document.createElement('button');
editButton.innerText = 'Editar';
editButton.addEventListener('click', function() {

	// Deshabilitamos el botón de editar para que no se repita, si no renueva datos.
	editButton.disabled = true;

	// Creamos un formulario para editar los datos del usuario
	const form = document.createElement('form');

	// Agregamos un campo para el nuevo nombre del usuario
	const nameInput = document.createElement('input');
	nameInput.type = 'text';
	nameInput.value = user.name;
	form.appendChild(nameInput);

	// Agregamos un campo para el nuevo correo electrónico del usuario
	const emailInput = document.createElement('input');
	emailInput.type = 'email';
	emailInput.value = user.email;
	form.appendChild(emailInput);

	// Agregamos un campo para el nuevo rol del usuario
	const roleInput = document.createElement('select');
	const adminOption = document.createElement('option');
	adminOption.value = 'admin';
	adminOption.innerText = 'Administrador';
	const userOption = document.createElement('option');
	userOption.value = 'invitado';
	userOption.innerText = 'invitado';
	roleInput.appendChild(adminOption);
	roleInput.appendChild(userOption);
	roleInput.value = user.role;
	form.appendChild(roleInput);

	// Agregamos un botón para guardar los cambios
	const saveButton = document.createElement('button');
	saveButton.type = 'submit';
	saveButton.innerText = 'Guardar';
	form.appendChild(saveButton);

	// Agregamos un evento de escucha para el envío del formulario
	form.addEventListener('submit', function(event) {
		event.preventDefault();

		// Actualizamos los datos del usuario en el LocalStorage
		user.name = nameInput.value;
		user.email = emailInput.value;
		user.role = roleInput.value;
		localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

		// Actualizamos la fila de la tabla
		nameCell.innerText = user.name;
		emailCell.innerText = user.email;
		roleCell.innerText = user.role;

		// Ocultamos el formulario
		form.style.display = 'none';
	});

	// Agregamos el formulario a la celda del botón de editar
	editButtonCell.appendChild(form);

	// Mostramos el formulario
	form.style.display = 'block';
});
editButtonCell.appendChild(editButton);
row.appendChild(editButtonCell);


	// Agregamos el botón de eliminar
const deleteButtonCell = document.createElement('td');
const deleteButton = document.createElement('button');
deleteButton.innerText = 'Eliminar';
deleteButton.addEventListener('click', function() {
	// Mostramos una alerta para confirmar la eliminación
	if (confirm('¿Estás seguro que quieres eliminar este usuario?')) {
		// Eliminamos el usuario de la lista de usuarios registrados
		const index = registeredUsers.indexOf(user);
		registeredUsers.splice(index, 1);

		// Actualizamos la lista de usuarios registrados en el LocalStorage
		localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

		// Eliminamos la fila de la tabla
		row.remove();
	}
});
deleteButtonCell.appendChild(deleteButton);
row.appendChild(deleteButtonCell);


	// Agregamos la fila a la tabla
	userList.appendChild(row);
});