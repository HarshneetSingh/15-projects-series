const questions = document.querySelectorAll('.question');

console.log(questions)// it will show nodelist



questions.forEach(function (ques) {
    console.log(ques);// it will show nodelist elements   seperate
    const btn = ques.querySelector('.btn');
    console.log(btn); //it will show nodelist elements   seperate


    btn.addEventListener('click', function () {

        questions.forEach(function (item) {
            if (item !== ques) {
                item.classList.remove('show-text');
            }
        })


        // console.log(btn)
        ques.classList.toggle('show-text');
    })
})



// traversing the dom
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });