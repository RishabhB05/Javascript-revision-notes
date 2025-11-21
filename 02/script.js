//Variables:-

//difference between var, let and const
//var:- global scoped, can be re-declared and updated
if(true){
    var a = "I am var";
}
console.log(a);
//let:- block scoped, cannot be re-declared but can be updated
if(true){
    let b = "I am let";
    console.log(b);
}
//const:- block scoped, cannot be re-declared or updated
if(true){
    const c = "I am const";
    console.log(c);
}