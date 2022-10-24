let form = document.forms[0];
let message = document.querySelector('.hidden');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.reset();
    message.style.opacity = '1';
})
