const open_button = document.getElementById('open-btn')
const close_button = document.getElementById('close-btn')
const container = document.querySelector('.container')

open_button.addEventListener('click', () => container.classList.add('show-nav'))
close_button.addEventListener('click', () => container.classList.remove('show-nav'))

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}