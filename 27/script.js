//IIFE - immediately invoked function expression

//here we define and immediately invoke the function
(function add(a, b){
    console.log(a + b);
})(5, 10);


(()=>console.log("I am  Es6"))();


//example 1
//execute a async function

//this is not a good approach because we have to 
//first creating a varible whose value is undefined and then we updating the value
let data
async function getData(){
    data = await fetch()
}
getData();

//but using IIFE :- much cleaner approach
const data1 = (async()=> await fetch()) ; 




//example 3:- creating a ATM where he cant view his balance but to view balance he has to withdraw money
const ATM = (function(initialBalance){
    let balance = initialBalance;

    function witdraw(amount){
        if(amount > balance){
            return ("Insufficient balance");
        }else{
            balance -= amount;
            return balance; 
        }
    }
 //why did we return an object here
 //because if we return just the witdraw function then there is no way to access the balance variable
 //but if we return an object with witdraw method then we can access the witdraw method from outside
    return {witdraw};
   
})

const Rishi = ATM(85000);
console.log(Rishi.witdraw(5000)); //80000
console.log(Rishi.witdraw(90000)); //Insufficient balance

