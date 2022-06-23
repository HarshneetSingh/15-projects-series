const colorNames = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const colorPosition = document.querySelector('.color');
function randomNumber() {
    return Math.floor(Math.random() * colorNames.length)
};
btn.addEventListener('click', function () {
    let hexName  = "#";
   
   
    for (let index = 0; index < 6; index++) {
       
       hexName+=colorNames[randomNumber()]; 
    }
    console.log(hexName);
    document.body.style.backgroundColor = hexName;
    colorPosition.textContent = hexName;
})


