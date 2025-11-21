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