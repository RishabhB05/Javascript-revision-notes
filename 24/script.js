//Currying in JavaScript
// transforming a function with multiple arguments into a sequence of functions each taking a single argument
//suppose we have a function that takes three arguments
//and unless we provide all three arguments at once, it will not work

function add(a, b, c){
    console.log(a + b + c);
}
add(2, 3, 4); //9
add(2,3) //NaN
add(2) //NaN

//now we will transform this function into a curried function
function curriedAdd(a){
    return function(b){
        return function(c){
            console.log(a + b + c);
        }
    }

}
curriedAdd(2)(3)(4); //9
//if we only provide one or two arguments, it will return a function


//it is used in email servers where we have to provide multiple configurations
//example 2
function sendMail(to){
    return function(subject){
        return function(body){
            console.log(`Sending mail to: ${to}`);
            console.log(`Subject: ${subject}`);
            console.log(`Body: ${body}`);
        }
    }
}

let step1 = sendMail("rishabh@gmail.com");
let step2 = step1('Hello there!');
step2('This is the body of the email.');

//curry basically helps to run in sequence
