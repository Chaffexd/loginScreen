const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);
})