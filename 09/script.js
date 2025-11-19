//High order functions: Functions that can take other functions as arguments or return functions as their result.
//Examples: map, filter, reduce, forEach

//map: it creates a new array by applying a function to each element of the original array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); //Output: [1, 4, 9, 16, 25]

//filter: it creates a new array with all elements that pass the test implemented by the provided function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); //Output: [2, 4]

//reduce: it applies a function against an accumulator and each element in the array to reduce it to a single value
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); //Output: 15

//forEach: it executes a provided function once for each array element
numbers.forEach(num => console.log(num * 2)); //Output: 2, 4, 6, 8, 10

  