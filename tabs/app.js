const btns = document.querySelectorAll(".btns")
const content = document.querySelectorAll('.content')

btns.forEach(button => {

    button.addEventListener('click', function (e) {
        const target = e.currentTarget.dataset.id;
        const nextId = document.getElementById(target)

        console.log(nextId)

            content.forEach((item) => {
                const ids = item.getAttribute('id')
                if (target != ids) {
                    content.classList.remove('active-content');

                }
            })
        // if(nextId.classList.contains('active-content'))

        if (!nextId.classList.contains('active-content')) {
            nextId.classList.add('active-content');
        }


    })

});


  // *  const hello= Object.assign({}, filterContent);
//   ? you can make an array into object


// [...content].filter((item)=>{})
// ? you can convert an nodelist into array by spread operator