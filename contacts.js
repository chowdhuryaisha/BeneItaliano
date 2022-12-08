const open_button = document.getElementById('open-btn')
const close_button = document.getElementById('close-btn')
const container = document.querySelector('.container')

open_button.addEventListener('click', () => container.classList.add('show-nav'))
close_button.addEventListener('click', () => container.classList.remove('show-nav'))

var nextStep = document.querySelector('#nextStep');

nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('my_form').style.display = 'none';
    document.getElementById('thank_you').style.display = 'block';
});
