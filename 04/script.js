//conditional statements in JavaScript

//if-else statement
const age = 20;
if(age<18){
    console.log("You are a minor.");
}else{
    console.log("You are an adult.");
}

//switch statement
const day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//ternary operator
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log("Discount:", discount);

//loops in JavaScript

//for loop
for(let i=1; i<=5; i++){
    console.log("For Loop iteration:", i);
}

//while loop
let j = 1;
while(j<=5){
    console.log("While Loop iteration:", j);
    j++;
}

//do-while loop
let k = 1;
do {
    console.log("Do-While Loop iteration:", k);
    k++;
} while (k <= 5);

//break and continue statements
for(let m=1; m<=10; m++){
    if(m === 6){
        break; //exit loop when m is 6
    }
}
