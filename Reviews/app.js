const reviews = [
    {
        id: 0,
        name: "Harshneet Singh",
        proffesion: "Full Stack Developer",
        Img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
   
        info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing,it amet consectetur adipisicing elit. Quidem inventore molestiae optio, architecto voluptas,        exercitationem?it. Amet, quae sunt est incidunt iste officiis. Lorem ipsum dolor s"

    },
    {
        id: 1,
        name: "Tejas Singh",
        proffesion: "Data Scientist",
        Img:
            "img/hello.jpeg",

        info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing,it amet consectetur adipisicing elit. Quidem inventore molestiae optio, architecto voluptas,        exercitationem?it. Amet, quae sunt est incidunt iste officiis. Lorem ipsum dolor s,"

    },
    {
        id: 2,
        name: "Ronnica June",
        proffesion: "Web Designer",
        Img:
                    "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",

        info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing,it amet consectetur adipisicing elit. Quidem inventore molestiae optio, architecto voluptas,        exercitationem?it. Amet, quae sunt est incidunt iste officiis. Lorem ipsum dolor s,"

    },
    {
        id: 3,
        name: "May Jules",
        proffesion: "UI/UX Designer ",
        Img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",

        info:
            "Lorem ipsum, dolor sit amet consectetur adipisicing,it amet consectetur adipisicing elit. Quidem inventore molestiae optio, architecto voluptas,        exercitationem?it. Amet, quae sunt est incidunt iste officiis. Lorem ipsum dolor s,"

    }
]
// select items
const img = document.getElementById('imgg');
const naam = document.getElementById('namee');
const proffesion = document.getElementById('proffesionn');
const info = document.getElementById('infoo');

const firstBtn = document.querySelector('.first');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.randomButton');
// SET STARTING ITEM 
let currentItem=0;

// LOAD INTITAL ITEM

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
})

function showPerson(reviewID) {
    const first = reviews[reviewID];

    img.src = first.Img;
    naam.textContent=first.name;
    proffesion.textContent=first.proffesion;
    info.textContent=first.info;
}
// 
nextBtn.addEventListener('click',function () {
    currentItem++
    if(currentItem>=reviews.length){
        currentItem=0;
    }
    showPerson(currentItem);
})
// priv btn
firstBtn.addEventListener('click',function () {
    currentItem--;
    if(currentItem<0){
        currentItem=3;
    }
    showPerson(currentItem);
})

// show random button
function random() {
    currentItem= Math.floor(Math.random()*reviews.length);
    return currentItem;
}

randomBtn.addEventListener('click',function () {
    showPerson(random());
})