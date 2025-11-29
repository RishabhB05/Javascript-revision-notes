function generateNumber(min,max){
  return  min + Math.floor(Math.random() * (max - min + 1));
}

function generateColorCode(){
  const r = generateNumber(0, 255);
  const g = generateNumber(0, 255);
  const b = generateNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;        // Added spaces after commas
}

const colorCodeContainer = document.getElementById('colorValue');
const optionContainer = document.getElementById('container');

let score = 0;
let randomColor = '';

function incrementScore(){
   score++;
   const scoreContainer = document.getElementById('score');
   if(scoreContainer) scoreContainer.innerText = 'Score: ' + score;
}

function validateColor(elem){
   const selectedColor = elem.target.style.backgroundColor;
   
   const normalizedSelected = selectedColor.replace(/ /g, '');
   const normalizedRandom = randomColor.replace(/ /g, '');

   if(normalizedSelected === normalizedRandom){
     incrementScore();
     startGame();
   } else {
        alert('Wrong choice! Game Over. Your final score is ' + score);
        score = 0;
        const scoreContainer = document.getElementById('score');
        if(scoreContainer) scoreContainer.innerText = 'Score: ' + score;
        startGame();
   }
}

function startGame(){
   randomColor = generateColorCode();
   colorCodeContainer.innerText = randomColor;
   
   const correctOptionIndex = generateNumber(0,3);

   optionContainer.innerHTML = '';

   for(let i = 0; i<4 ; i++){
     const div = document.createElement('div');
     div.style.backgroundColor = i === correctOptionIndex ? randomColor : generateColorCode();
     
     div.addEventListener('click', validateColor);
     optionContainer.appendChild(div);
   }
}