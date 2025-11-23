//building a stopwatch 

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const input = document.getElementById('timeinput');




function stopwatch(){
  const time = input.value ;
  let second = 0;

  const interval = setInterval(function(){
    second++;
    display.innerText = second;
}, 1000);
 
//stopping the stopwatch after given time
    setTimeout(function(){  
        clearInterval(interval);
    }, time * 1000);
}

startButton.addEventListener('click', stopwatch);
