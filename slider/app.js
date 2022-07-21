const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const slide = document.querySelectorAll('.slides');

console.log(slide)
let count = 0;
slide.forEach((element, index) => {
    element.style.left = `${index * 100}%`
})
nextBtn.addEventListener('click', function () {
    count++;
    crousel();

})
prevBtn.addEventListener('click', function () {
    count--;
    crousel();

})
function crousel() {

    // if (count === slide.length) {
    //     count = 0
    // }
    // if(count<0){
    //     count=slide.length-1
    // }

    if (count>0) {
        prevBtn.style.display="inline-block";
    }else{
        prevBtn.style.display="none";

    }
    if(count>slide.length-2){
    nextBtn.style.display="none"

    }
    else{
    nextBtn.style.display="inline-block"; 

    }
    slide.forEach((element) => {


        element.style.transform = `translateX(-${count * 100}%)`

    });
}
// }
window.addEventListener('DOMContentLoaded',()=>{
prevBtn.style.display="none"
    
})