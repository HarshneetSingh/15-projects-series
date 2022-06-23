const colorNames = ["red", "green","white","yellow", "rgba(9, 41, 78, 0.607)", "#f15025"];

const btn = document.getElementById('btn');
const colorPosition = document.querySelector('.color');
function randomNumber() {
    return Math.floor(Math.random() * colorNames.length)
};
btn.addEventListener('click', function () {
    const number = randomNumber();
    console.log(number)
    document.body.style.backgroundColor = colorNames[number];
    colorPosition.textContent = colorNames[number];
})
