const months = [
    "jan",
    "feb",
    "march",
    "apr",
    "may",
    "june",
    "july",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec"
]
const weekDays = [
    "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
]


// *here queryselector is so powerfull that we just bring the h5 of that container content
const dateContent = document.querySelector('.container-content h5')
const changineDateContent = document.querySelectorAll('.timer-container h6')
const timer = document.querySelector('.timer')

// console.log(targetDate);

// * here were declaring target date 
// Date(  year: number, month   : number, date?     :  number | undefined,
//  hours?     : number | undefined, minutes?    : number | undefined, 
// seconds?      : number | undefined, ms?    : number | undefined): Date

// ? do type  the month  index type 

// const targetDate = new Date(2022, 6, 15, 23, 1, 55);

// * for setting dynamically
const dynamicDate=new Date();
console.log(dynamicDate)
const tempYear = dynamicDate.getFullYear();
const tempMonth=dynamicDate.getMonth()
const tempDate = dynamicDate.getDate()   

const targetDate = new Date(tempYear, tempMonth, tempDate+10, 7, 30,00);
console.log(tempMonth)
const year = targetDate.getFullYear(); //2022
const date = targetDate.getDate()   //25
const hour = targetDate.getHours()  //7 am 
const mins = targetDate.getMinutes()    //30

// *now here we are taking month from months array as the normal getMonth() prints the number value from the (0-11) same with day 
let month = targetDate.getMonth()
month = months[month]

// *  we dont mention the day this function will tell the automaically 

let day = targetDate.getDay()
day = weekDays[day];

dateContent.innerHTML = `giveaway ends on ${day},${date} ${month} ${year} ${hour}:${mins}am`



function remainingTime() {
    const todayDateInMs = new Date().getTime();
    // console.log(todayDateInMs) // this will continuesly inc
    const futureDateInMs = targetDate.getTime()
    // console.log(futureDateInMs) // it will remain constant

    const rT = futureDateInMs - todayDateInMs// rt = remaining Time 

    //1s =1000ms
    //1m=60s
    //1hr=60m
    //1day=24hrs

    const msINday = 24 * 60 * 60 * 1000;// milliseconds of  a single day 
    const msINhr = 60 * 60 * 1000;
    const msINmins = 60 * 1000;
    const msINsecs = 1000;

    // ? remaining day
    let rd = rT / msINday
    //    *now we will just floor off it as this will give in point 
    rd = Math.floor(rd);


    // ? remaining hour
    let rh = rT / msINhr;
    rh = rh % 24;
    rh = Math.floor(rh);



    // ? remaining minutes
    let rm = rT / msINmins;
    console.log(rm)
    rm = rm % 60;
    rm = Math.floor(rm);

    // ? remaining secs

    let rs = rT / msINsecs;
    rs = rs % 60;
    rs = Math.floor(rs)

    // we can also do this
    // let hours = Math.floor((t % oneDay) / oneHour);
    // let minutes = Math.floor((t % oneHour) / oneMinute);
    // let seconds = Math.floor((t % oneMinute) / 1000);

    //? now if the value is less then 0 then add 0 before it 

    function format(item) {
        if (item<10) {
            item=`0${item}`
        }
        return item
    }
    

    // * now were just looping timer changer h6 by replacing the values in it 
    // we can also do it single ly by calling each of class like date hour from html then doing inner html the values 
    const values = [rd, rh, rm, rs]

    
    changineDateContent.forEach(function (items, index) {
        items.innerHTML = format(values[index]);
    })
    if(rT<0){
        clearInterval(countdown);
        timer.innerHTML=`<h4 class="expired">sorry the give away is over</h4>`;
    }
}
let countdown=setInterval(remainingTime,1000);
remainingTime()
