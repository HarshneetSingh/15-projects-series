const btn=document.querySelector('.btn');
const btnSwitch=document.querySelector('.btn-switch');

const vid=document.querySelector('.hello')

btn.addEventListener("click",function () {
    if(!btnSwitch.classList.contains('slide'))   {
        btnSwitch.classList.add('slide');
        vid.pause();
    } else{
        btnSwitch.classList.remove('slide');
        vid.play();

    }
})