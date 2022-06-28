const openbtn=document.querySelector('.open-btn');
const closebtn=document.querySelector('.close-btn');
// const modal2=document.querySelector('');
const modal=document.querySelector('.modal-overlay');


openbtn.addEventListener('click',function () {
   
          modal.classList.add('modal-overlay2');
    
      

});
closebtn.addEventListener('click',function(){
        modal.classList.remove('modal-overlay2');
  
})