// Js Bom
// Browser Object Model | Timing events
// setTimeOut(), setInterval()

setTimeout(()=>{
    console.log('hi')
},2000)

setTimeout(display,2000);
 
function display(){
    console.log('display')
}

const saveButton = document.querySelector('.save-btn');
const message = document.querySelector('.message');

saveButton.addEventListener('click', saveUser)
 function saveUser(){
    message.textContent="user reg successful"

    setTimeout (()=>{
        message.textContent = "";

    },2000)
 }

 const message2 = document.querySelector('.message2');

 saveButton.addEventListener('click', displayCount)
 function displayCount(){
    let count =0;
    message2.textContent="1"

  
    setInterval(()=>{
        count ++ ;
        message2.textContent= count;
    },1000)
 }


