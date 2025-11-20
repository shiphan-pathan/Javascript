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

fruit.length = 2; // Modifying length property
// console.log(fruit); // Output: [ 'Banana', 'Orange' ]

let myList = fruit.toString(); // Converting array to string
console.log(myList); // Output: Banana,Orange