//Arrays

const fruits = ["Apple", "Banana", "Mango", "Orange"];

//Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

//Adding elements
fruits.push("Grapes");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]

//Removing elements
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

//Iterating over an array
fruits.forEach(val => {
    console.log(val);
});

//Array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8, 10


//all operation on arrays
//length
console.log(fruits.length); //4
//indexOf   
console.log(fruits.indexOf("Mango")); //2
//includes
console.log(fruits.includes("Banana")); //true
//join
console.log(fruits.join("; ")); // "Apple; Banana; Mango; Orange"
//slice
console.log(fruits.slice(1, 3)); //["Banana", "Mango"]
//splice
fruits.splice(1, 1, "Pineapple");
console.log(fruits); // ["Apple", "Pineapple", "Mango", "Orange"]
//concat
const moreFruits = ["Kiwi", "Peach"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Pineapple", "Mango", "Orange", "Kiwi", "Peach"]

//sort
const sortedFruits = allFruits.sort();
console.log(sortedFruits); // ["Apple", "Kiwi", "Mango", "Orange", "Peach", "Pineapple"]

//reverse
const reversedFruits = allFruits.reverse();
console.log(reversedFruits); // ["Peach", "Kiwi", "Orange", "Mango", "Pineapple", "Apple"]

//find
const foundFruit = allFruits.find(fruit => fruit.startsWith("P"));
console.log(foundFruit); // "Peach"

//findIndex
const foundIndex = allFruits.findIndex(fruit => fruit.startsWith("M"));
console.log(foundIndex); // 3

//every
const allHaveE = allFruits.every(fruit => fruit.includes("e"));
console.log(allHaveE); // false

//some
const someHaveA = allFruits.some(fruit => fruit.includes("a"));
console.log(someHaveA); // true