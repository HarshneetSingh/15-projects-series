const togglebtn = document.querySelector('.toggle');
const link = document.querySelector(".links")

const linkContainer = document.querySelector(".linksContainer")
//************** */ navbar ****************
togglebtn.addEventListener("click", function () {
    const linksConatinerHeight = linkContainer.getBoundingClientRect().height

    const linksHeight = link.getBoundingClientRect().height


    // console.log(linksConatinerHeight)
    // console.log(linksHeight)

    if (linksConatinerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
    }
    else {

        linkContainer.style.height = 0;
    }

})
// *************fixed nav*******************
const nav = document.querySelector(".hello");

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const topLink=document.querySelector('.top-link')
    const navHeight = nav.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        nav.classList.add('fixed-nav');
    }
    else {
        nav.classList.remove('fixed-nav');

    }

    // ******* top links*******
    
    if (scrollHeight>500) {
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');

    }

})

//***************  footer date*******************

const date = document.getElementById("date")

date.innerHTML = new Date().getFullYear();