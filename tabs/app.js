const btns = document.querySelectorAll(".btns")
const content = document.querySelectorAll('.content')




// btns.forEach(button => {

//     button.addEventListener('click', function (e) {

//         const target = e.currentTarget.dataset.id;
//         const detailId = document.getElementById(target)


//         // 

//         btns.forEach((item) => {
//             const dataSet = item.getAttribute('data-id')
//             console.log(dataSet)
//             if (target !== dataSet) {
//                 item.classList.remove('active-content');
//             }
//         })
//         if (!button.classList.contains('active-content')) {
//             button.classList.add('active-content');
//         }
//         content.forEach((item) => {
//             const ids = item.getAttribute('id')
//             if (target !== ids) {
//                 item.classList.remove('active-content');
//             }
//         })

//         if (!detailId.classList.contains('active-content')) {
//             detailId.classList.add('active-content');
//         }






//     })

// });
const about = document.querySelector(".article-info");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(e)
  console.log(id)
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active-content");
    });
    e.target.classList.add("active-content");
    // hide other articles
    content.forEach(function (article) {
      article.classList.remove("active-content");
    });
    const element = document.getElementById(id);
    element.classList.add("active-content");
  }
});

  // *  const hello= Object.assign({}, filterContent);
//   ? you can make an array into object


// [...content].filter((item)=>{})
// ? you can convert an nodelist into array by spread operator