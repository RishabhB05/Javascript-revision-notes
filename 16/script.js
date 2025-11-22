//Event handlers in HTML

//method 1:- using inline event handlers
function handleClick(){
    alert("Button was clicked!");
}


//method 2:- using event listeners
const button2 = document.getElementById('but2');
if (button2) {
    button2.addEventListener('click', function(){
        alert("Button 2 was clicked!");
    });
}

//TASK 1: make a button so that clicking it will change the bg color 

const elem = document.getElementById('changeColor');

function changeColor(){
    const current = document.body.style.backgroundColor;
    if (current === 'lightblue') {
        document.body.style.backgroundColor = 'lightgreen';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
}

if (elem) {
    elem.addEventListener('click', changeColor);
}


//TASK 2: suppose if we want to remove children while clicking onit

const allChildren = document.querySelectorAll("body").children;
allChildren.item(i).addEventListener('click', function(){
    allChildren.item(i).remove();
});


