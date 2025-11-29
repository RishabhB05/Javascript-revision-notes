let currentPlayer = "X";
let array = Array(9).fill(null);



//function to check if a player has won
function checkWin(){
    //handle horizontal win
    for(let i =0; i<9; i+=3){
        if(array[i] && array[i] === array[i+1] && array[i] === array[i+2]){
            alert(`${array[i]} has won the game!`);
            return;
        }
    }
    //handle vertical win
    for(let i =0; i<3; i++){
        if(array[i] && array[i] === array[i+3] && array[i] === array[i+6]){
            alert(`${array[i]} has won the game!`);
            return;
        }
    }
    //handle diagonal win
    if(array[0] && array[0] === array[4] && array[0] === array[8]){
        alert(`${array[0]} has won the game!`);
        return;
    }
    if(array[2] && array[2] === array[4] && array[2] === array[6]){
        alert(`${array[2]} has won the game!`);
        return;
    }

   //means if there is no any null value in the array then its a draw
    if(!array.some(elem => elem === null)){
        alert("It's a draw!");
    } 
}

function resetGame() {
    currentPlayer = "X";
    array = Array(9).fill(null);
     
    
    const cells = document.querySelectorAll(".col");
    cells.forEach(cell => cell.innerText = "");

}






//element stores the id of the clicked button
function handleClick(element) {

    //here we are converting the id from string to number
    const id = Number(element.id); 
     if(array[id] != null) return; 
    //here we are updating the array at the index id with currentPlayer value
    array[id] = currentPlayer;
    //element has the id so we are updating the innerText of that element with currentPlayer value
    element.innerText = currentPlayer;

    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";


}