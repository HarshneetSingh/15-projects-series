const btn=document.querySelector('.btn');
const btnSwitch=document.querySelector('.btn-switch');

const vid=document.querySelector('.hello')
const preLoader= document.querySelector('.preloader')
btn.addEventListener("click",function () {
    if(!btnSwitch.classList.contains('slide'))   {
        btnSwitch.classList.add('slide');
        vid.pause();
    } else{
        btnSwitch.classList.remove('slide');
        vid.play();

    }
})

window.addEventListener('load',function () {
    preLoader.classList.toggle('loader-hidden')
})