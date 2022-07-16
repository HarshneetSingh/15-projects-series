const text=[
`ipsum dolor sit amet consectetur, adipisicing elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,
`dolor sit amet consectetur, adipisicing elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,`ectetur, adipisicing elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,` elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,` amet consectetur, adipisicing elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,`rem ipsum dolor sit amet consectetur, adipisicing elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,`sectetur, adipisicing elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,`or sit amet consectetur, adipisicing elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,`um dolor sit amet consectetur, adipisicing elit. Omnis reprehenderit itaque ipsam ut sit consectetur nemo consequatur quasi dolorum quisquam!`,

]

const loremForm=document.querySelector('.lorem-form')
const inputFromUser=document.querySelector('.input')
const textContent=document.querySelector('.lorem-text')



loremForm.addEventListener('submit',function(e){
    e.preventDefault();
    let value=inputFromUser.value
    value=parseInt(value); 
    
    const random=Math.floor(Math.random()*text.length)
console.log(random)
    if (isNaN(value)|| value <=0 ||value>9  ) {
       textContent.innerHTML= `<p>${text[random]}</p>`;
    }
    else{
        const tempArr=text.slice(0,value)
        const output= tempArr.map((item)=>{
            return`<p>${item}<p>`
        }).join('');
        textContent.innerHTML=output;

    }

})