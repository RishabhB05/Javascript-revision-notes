//Creating dynamic elements 

const button = document.createElement("button");

const container = document.getElementById("my-container");

//i want at each click a H1 element is created
button.addEventListener("click", function(){
   const h1 = document.createElement("h1");
   h1.innerText = "New Heading";
   container.appendChild(h1);
});

