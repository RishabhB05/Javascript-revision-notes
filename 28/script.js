//Generator function in javascript

//iterators are objects that allow us to traverse through a collection
//generators are special functions that can be paused and resumed
//they provide a way to create iterators more easily


//example 1:- MAKING OUR OWN ITERATOR 

function makeIterator(start = 0, end = Infinity , step = 1){    
    let nextStart = start;
    let interationCount = 0;

    return{
       next(){
         let result ;
         if(interationCount < end){
             result = {value: nextStart, done:false}
             nextStart = nextStart + step;
             interationCount++;
             return result
         }
         return {value: interationCount , done: true}
       }
    }

}

const myIterator = makeIterator(1, 10, 1);
let result = myIterator.next();

while(!result.done){
    console.log(result.value); //1 2 3 4 5 6 7 8 9 10
    result = myIterator.next();
}

//here we built our own iterator


//but we havent used any generator , 
//so it cannot be used in for..of loop directly
//to use it in for..of loop we have to implement the iterable protocol
//by adding a method with key Symbol * iterator that returns the iterator object

//example 1:- generator function
function* count(){
    yield 1;
    yield 2;
    yield 6;
    yield 8;
    yield 9;
}

const even = count();

for(const num of even){
        console.log(num);
}

//example 2:- generator function 

function makemyIterator(start, end){
    for(let i = start, i <=end ; i++){
        yield i;
    }
}

const one = makemyIterator(1,10);
for(const val of one){
    console.log(val);
}