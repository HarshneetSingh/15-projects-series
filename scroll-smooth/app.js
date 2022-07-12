const togglebtn = document.querySelector('.toggle');
const link = document.querySelector(".links")

const linkContainer = document.querySelector(".linksContainer")


//**************  navbar ****************


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
    const topLink = document.querySelector('.top-link')
    const navHeight = nav.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        nav.classList.add('fixed-nav');
    }
    else {
        nav.classList.remove('fixed-nav');

    }

    // ******* top links*******
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');

    }

})
// ******* smooth scroll********************

//  select links
const scrollTo = document.querySelectorAll('.scroll-to');


scrollTo.forEach(element => {
    element.addEventListener('click', function (e) {
        //  *  now preventing for scrolling which is automatic in html 

        e.preventDefault();

        // *  now target the click and taking its attribute href value and removing # from it

        const target = e.currentTarget.getAttribute('href').slice(1)
        // console.log(target)

        //* now getting the target href id 

        const id = document.getElementById(target);
        // console.log(id);

        //* now finding the id position from the top
        // * we are - the navHeight as we want out section title display below the navbar


        const navHeight = nav.getBoundingClientRect().height;
        
        const linksHeight = link.getBoundingClientRect().height
        let position = id.offsetTop - navHeight;
        if (navHeight > 83) {
            position = position + linksHeight;
        }

        //* here we are scrolling to the position 
        // * scrollto(x,y) here x means horizantly scrolling and y means vertically scrolling

        window.scrollTo(0, position)

        // *here were bringing linkscontainer for RESPONSIVE DESIGN and making its height 0 so that as person click the e then its height will go to 0 

        linkContainer.style.height = 0;
    })
});

//***************  footer date*******************


const date = document.getElementById("date")

date.innerHTML = new Date().getFullYear();