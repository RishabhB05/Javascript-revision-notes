//Event handlers in HTML

//method 1:- using inline event handlers
function handleClick(){
    alert("Button was clicked!");
}


//method 2:- using event listeners
const button2 = document.getElementById('but2');
button2.addEventListener('click', function(){
    alert("Button 2 was clicked!");
});