let count = 0;
const main =document.querySelector(".main");
const baseCount = document.getElementById('count');
const btn = document.querySelectorAll(".btn");

// querSelectors helps to bring same class elements present in html in tthe form of nodelist
// node list can be acccess by index only console.log(btn[1]);
// or
// console.log(btn);//whole lnodelist will print 

// now to access each of the element of the query selectors we will iterate through loop

// event listener take only 1 parameter that event 


btn.forEach(function (btnElement) {
    btnElement.addEventListener('click', function (e) {

        //here event.currentTarget is , on which button is clicked and .classList is what classes that button have 
        const styles = e.currentTarget.classList;
        // here contains check whetther this style variable class list contains dec .
        if (styles.contains("dec")) {
            count--;
        }
        else if (styles.contains('inc')) {
            count++;
        }
        else {
            count = 0;
        }
        baseCount.textContent = count;

        if (count>0) {
            main.style.backgroundColor="yellow";
        } else if(count<0) {
            main.style.backgroundColor="red";
            
        }
        else{
            main.style.backgroundColor="white";

        }
    })
})







