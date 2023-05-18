const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'Login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    alert('Hasta pronto!')
    localStorage.removeItem('login_success')
    window.location.href = 'Login.html'
})