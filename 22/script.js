//Building a simple clock
const clockElement = document.getElementById('clock').querySelector('span');

function updateClock() {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    clockElement.innerText = time;
}

updateClock(); //initial call
let interval = setInterval(updateClock, 1000);

//Stopping the clock on button click
const stopButton = document.getElementById('stop');

stopButton.addEventListener('click', function(){
    clearInterval(interval); 
});  