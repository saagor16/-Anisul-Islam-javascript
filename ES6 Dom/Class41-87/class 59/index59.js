// Js Bom
// Browser Object Model | Create a Clock
// setTimeOut(), setInterval()

const message = document.querySelector('.message');
const saveButton = document.querySelector('.save-btn');


saveButton.addEventListener('click',startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;

    minutes = formatTime(minutes);
    seconds=formatTime(seconds);


    console.log(time);
    message.textContent = time;

    setInterval(startClock,1000)

}
function formatTime(value){
    if(value<10){
        value='0'+value;
        
    }return value;
}
