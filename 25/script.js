//Composition in javascript
//suppose their are various functions that perform a specific task
//and we want to combine or run sequentially these functions to achieve a specific task
//for this we use composition

//example 1
//this will cause problem , what if there are 100 function
//it will be hard to read and maintain
function add(a, b){
    return a + b;
}
function square(x){
    return x * x;
}

function addandSquare(a, b){
   return square(add(a, b));
}

//composed function
function compose(f, g){
    return function(a, b){
        return f(g(a, b));
    }
}

const addSquare = compose(square, add);
console.log(addSquare(2, 3));; //25

//same code but modern js
const c2f = (f, g) => (a, b) => f(g(a, b));
const addSquare2 = c2f(square, add);
console.log(addSquare2(2, 3)); //25


//example 2:- compose function with multiple arguments
//argument will take array
function composeMultiple(...fns){
    return function(...args){
            //reduceRight will apply functions from right to left
            return fns.reduceRight((a,b) => b(a), ...args);
        }
}

//modern js
const composeM = (...fns) => (...args) => fns.reduceRight((a,b) => b(a), ...args);