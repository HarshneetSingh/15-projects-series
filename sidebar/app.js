const openBtn=document.querySelector('.open-btn');
const closeBtn=document.querySelector('.close-btn');
const sideBar=document.querySelector('aside')

openBtn.addEventListener('click',function () {
    // sideBar.classList.add='show-aside';
    sideBar.classList.toggle("show-aside");
    // if (sideBar.style.width=('0%')) {
    //     sideBar.style.width=('50%')
    // } else {
        
        
    // }
})
closeBtn.addEventListener('click',function () {
    sideBar.classList.remove('show-aside');
})