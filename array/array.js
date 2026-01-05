// What is array?
// An array is a special variable, which can hold more than one value at a time.
// It is a list-like object used to store multiple values in a single variable.

// Create array using array literal
let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits); // Output: [ 'Apple', 'Banana', 'Orange' ]

// Create array using Array constructor
let vegetables = new Array("Carrot", "Broccoli", "Spinach");
// console.log(vegetables); // Output: [ 'Carrot', 'Broccoli', 'Spinach' ]

const fruit = ["Banana", "Orange", "Apple", "Mango"];
let length = fruit.length; // length property
console.log(length); // Output: 4

// Accessing array elements
let firstFruit = fruit[0]; // Accessing first element
// console.log(firstFruit); // Output: Banana

// fruit.length = 2; // Modifying length property
// console.log(fruit); // Output: [ 'Banana', 'Orange' ]

let myList = fruit.toString(); // Converting array to string
// console.log(myList); // Output: Banana,Orange

// array at() method
let lastFruit = fruit.at(-1); // Accessing last element using at() method
console.log(lastFruit); // Output: Mango

// Join() method
let fruitString = fruit.join(" - "); // Joining array elements into a string
console.log(fruitString); // Output: Banana - Orange - Apple - Mango

// concat() method
let moreFruits = ["Pineapple", "Grapes"]; 
let allFruits = fruit.concat(moreFruits); // Concatenating two arrays
console.log(allFruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Pineapple', 'Grapes' ]

//flat() method
let nestedArray = [1, 2, [3, 4], [5, 6]];
let flatArray = nestedArray.flat(); // Flattening nested array
console.log(flatArray); // Output: [ 1, 2, 3, 4, 5, 6 ]

