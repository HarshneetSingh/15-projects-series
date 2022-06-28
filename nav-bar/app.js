const togglebtn = document.querySelector('.toggle');
const nav = document.querySelector('nav');



togglebtn.addEventListener("click", function () {
  
    // if(nav.classList.contains('nav-links')){
    //     nav.classList.remove('nav-links');
    // }
    //     else {

    //     nav.classList.add('nav-links');
            
    //     }

    // toggle means if you click a button then it will add the class to the element you want to 
    // if you click it again it will hide .
     nav.classList.toggle('nav-links');
})