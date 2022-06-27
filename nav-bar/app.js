const togglebtn = document.querySelector('.toggle');
const nav = document.querySelector('.hello');

// window.addEventListener('DOMContentLoaded', function () {

// })
togglebtn.addEventListener("click", function () {
    if (nav.classList.height ='70px') {
        nav.classList.height = '230px';
    }
    else if (nav.classList.height = '230px') {
        nav.classList.height = '70px';
    }

    // nav.classList.toggle('nav-links');
})