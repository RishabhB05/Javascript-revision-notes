const fruits = ["Apple", "Banana", "Mango", "Orange"];


//forEach :- does not return anything
fruits.forEach((value) => {
    console.log(value);  // Output: Apple, Banana, Mango, Orange
})

//map :- returns a new array
const upperCaseFruits = fruits.map((value) => {
    return value.toUpperCase(); // Output: APPLE, BANANA, MANGO, ORANGE
});
console.log(upperCaseFruits);

//find :- returns the first matching element
const foundFruit = fruits.find((value) => {
    value == 'Mango'; // Output: Mango
});
console.log(foundFruit);

//includes :- returns true or false
const hasBanana = fruits.includes('Banana'); // Output: true


//filter :- returns a new array with all matching elements
const longNamedFruits = fruits.filter((value) => {
    return value.length > 5; // Output: Banana, Orange
});
console.log(longNamedFruits);