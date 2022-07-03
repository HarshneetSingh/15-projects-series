const menu = [
    {
        id: 1,
        title: "Paracetamol",
        category: "Fever",
        price: "Free",
        img: "/menu/img/para.jpg",
        desc: "This medicine can be used for fever for adults",
    },

    {
        id: 2,
        title: "Paracetamol Syrup",
        category: "Fever",
        price: "Free",
        img: "/menu/img/para syp.jpg",

        desc: "This medicine can be used for Fewer for childeren",
    },

    {
        id: 3,
        title: "losartan (Cozaar)",
        category: "Blood Pressure",
        price: "Free",
        img: "/menu/img/bp1.jpg",

        desc: "This medicine can be used for high Blood Pressure",
    },

    {
        id: 4,
        title: "irbesartan (Avapro)",
        category: "Blood Pressure",
        price: "Free",
        img: "/menu/img/bp2.jpg",

        desc: "This medicine can be used for  High Blood Pressure",
    },

    {
        id: 5,
        title: "metformin-alogliptin (Kazano)",
        category: "Diabetes",
        price: "Free",
        img: "/menu/img/sugar1.jpg",

        desc: "This medicine can be used for Diabetes",
    },

    {
        id: 6,
        title: "metformin-alogliptin (Kazano)",
        category: "Diabetes",
        price: "Free",
        img: "/menu/img/sugar2.jpg",

        desc: "This medicine can be used for Diabetes",
    },

    {
        id: 7,
        title: "Zantac150",
        category: "Acidity",
        price: "Free",
        img: "/menu/img/shit.jpg",

        desc: "This medicine can be used for Acidity",
    },

    {
        id: 8,
        title: "Dexlansoprazole (Dexilant)",
        category: "Acidity",
        price: "Free",
        img: "/menu/img/acidity.jpg",

        desc: "This medicine can be used for Acidity",
    },


]

const headArticle = document.querySelector('.menu-container');
const headBtn = document.querySelector('.btn-container');
const Btn = document.querySelectorAll('.btns');

window.addEventListener('DOMContentLoaded', function () {
    itemLoader(menu);

})

function itemLoader(menu) {
    let displayMenu = menu.map((item) => {

        return ` <article class="items">
                <div class="left">
                     <img src="${item.img}" alt="">
                </div>
                <div class="right">
                    <div class="items-upper">
                        <h3>${item.title}</h3>
                        <h4>${item.price}</h4>
                    </div>
                    <div class="items-lower">
                    ${item.desc}
                        
                    </div>


                </div>
            </article>`
    });

    displayMenu = displayMenu.join('');
    // here if we not put the '' then it will throw error in page as (,) will be added in it as 
    headArticle.innerHTML = displayMenu;
}





Btn.forEach(button => {
    button.addEventListener('click', function (e) {
        let category = e.currentTarget.dataset.id
        let filterForBtns = menu.filter((item) => {
            if (category === item.category) {
                return item
            }

        })
        if (category === 'All') {
            itemLoader(menu)
        }
        else {
            itemLoader(filterForBtns);
        }
    })
});
