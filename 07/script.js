//Functions
function sayHello(){
    console.log("Hello!");
}

function add(a, b){
    return a + b;
}

sayHello();

console.log(add(10, 3));

//unlimited arguments 
//we have access to all arguments using 'arguments' object
function adding(){
   console.log(arguments);

   let ans = 0;
   for(let i=0; i<arguments.length; i++){
     ans += arguments[i];
   }
   return ans;
}

//we can also use ... spread operator
function adding(...nums){
    console.log(nums);
}

console.log(adding(1,2,3,4,5,5,67,8,5));

 
//Arrow functions
const multiply = (x, y) => {
    return x * y;
}
console.log(multiply(4, 5));

//in arrow function we only have to use spread operator if we need various arguments
const multiplyAll = (...nums) => {
    let result = 1;
    for(let n of nums){
        result *= n;
    }
    return result;
}
console.log(multiplyAll(1,2,3,4,5));



//Hoisting : we can call function before its declaration
//it doesnot works for arrow functions
hoistedFunction();
function hoistedFunction(){
    console.log("I am hoisted!");
}

//this keyword : it refers to the current object
const person = {
    name: "Rishabh",
    age: 21,
    myfunction: function(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

person.myfunction();

