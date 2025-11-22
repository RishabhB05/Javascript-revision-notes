//query selector:- it returns the first element that matches a specified CSS selector(s) in the document.
//querySelectorAll:- it returns all elements that matches a specified CSS selector(s) in the document as a nodelist.

//tagname
//id #
//class . 

//whole html document is selected
const body = document.querySelector("body");
//we can change the inner html of body
body.innerHTML = "<h1>This is heading</h1><p>This is paragraph</p>";


//id selector
const myDiv = document.querySelector("#username");
myDiv.innerHTML = "Rishabh";
