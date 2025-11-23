//Closure:- it is a combination of fucntion bundled together 
//and the lexical environment within which that function was declared.
//In other words, a closure gives you access to an outer function's scope from an inner function.

function main(){
    const name = "Rishabh";

    function displayName(){
        console.log("Hello " + name);
    }
    displayName();
}

//here in the above code, displayName is a closure
//as it is accessing the variable name which is declared in the outer function main


//example 2
// we are creating function inside another function and returning it
function outer(name){
  function inner(){
    console.log("Hello " + name);
  }
  inner();
}

let consoleName = outer("Rishabh");
consoleName(); //Hello Rishabh


//example 3
function adder(num){
    function add(innerNum){
        console.log(num + innerNum);
    }
    return add;
}

const addTo5 = adder(5); //returns the inner function add
addTo5(3); //8
addTo5(10); //15
addTo5(20); //25
const addTo10 = adder(10);
addTo10(5); //15
addTo10(15); //25
addTo10(25); //35


//example 4 
function counter(num){

    function increment(){
        console.log(num+= num);
    }

    return increment;
    
}

const counterBy2 = counter(2);
counterBy2(); //4
counterBy2(); //8
counterBy2(); //16

//example 5 :- we can choose how much counter we want to increment by
function customCounter(step){

    let count = 0;
    function increment(){
        count += step;
        console.log(count);
    }   
    return increment;
}
const counterBy3 = customCounter(3);
counterBy3(); //3
counterBy3(); //6
counterBy3(); //9
const counterBy5 = customCounter(5);
counterBy5();   
counterBy5(); //10
counterBy5(); //15


