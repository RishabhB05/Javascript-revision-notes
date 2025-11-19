//Logical operator

// AND
const age = 20;
const gender = 'male';
if(age >= 18 && gender === 'male    '){
    console.log("You are an adult male.");  
} else {
    console.log("You are either not an adult or not a male.");
}

//OR
if(age >= 18 || gender === 'female'){
    console.log("You are either an adult or a female.");  
} else {
    console.log("You are neither an adult nor a female.");
}

//NOT
const isStudent = false;
if(!isStudent){
    console.log("You are not a student.");
} else {
    console.log("You are a student.");
}