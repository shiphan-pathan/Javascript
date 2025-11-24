// forEach array iteration method executes a provided function once for each array element.
const colors = ['red', 'green', 'blue', 'yellow'];
colors.forEach((color, index) => {  
    console.log(`Color at index ${index}: ${color}`);
});
// Output:
// Color at index 0: red
// Color at index 1: green
// Color at index 2: blue
// Color at index 3: yellow

// example of using forEach to calculate the sum of an array of numbers
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
numbers.forEach(num => {
    sum += num;
});
console.log(`The sum of the numbers is: ${sum}`); // Output: The sum of the numbers is: 150

// example of using forEach to log each character of a string
const message = "Hello";
[...message].forEach((char, index) => {
    console.log(`Character at index ${index}: ${char}`);
});
// Output:
// Character at index 0: H
// Character at index 1: e
// Character at index 2: l
// Character at index 3: l
// Character at index 4: o

// exaple of using foreach with function declaration
function logElements(element, index) {
    console.log(`Element at index ${index}: ${element}`);
}
const animals = ['dog', 'cat', 'elephant', 'lion'];
animals.forEach(logElements);
// Output:  
// Element at index 0: dog
// Element at index 1: cat
// Element at index 2: elephant
// Element at index 3: lion

// example of using forEach with arrow function
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
cities.forEach(city => console.log(`City: ${city}`));
// Output:
// City: New York
// City: Los Angeles
// City: Chicago
// City: Houston

