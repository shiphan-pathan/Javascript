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

// map array iteration method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbersForMap = [1, 2, 3, 4, 5];
const squaredNumbers = numbersForMap.map(num => num * num);
console.log(`Squared Numbers: ${squaredNumbers}`); // Output: Squared Numbers: 1,4,9,16,25

// example of using map to convert an array of strings to uppercase
const fruits = ['apple', 'banana', 'cherry', 'date'];
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(`Uppercased Fruits: ${uppercasedFruits}`); // Output: Uppercased Fruits: APPLE,BANANA,CHERRY,DATE

// example of using map to extract a specific property from an array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const userNames = users.map(user => user.name);
console.log(`User Names: ${userNames}`); // Output: User Names: Alice,Bob,Charlie

// flatMap array iteration method first maps each element using a mapping function, then flattens the result into a new array.
const nestedNumbers = [1, 2, 3];
const flatMappedNumbers = nestedNumbers.flatMap(num => [num, num * 2]);
console.log(`FlatMapped Numbers: ${flatMappedNumbers}`); // Output: FlatMapped Numbers: 1,2,2,4,3,6

// filter array iteration method creates a new array with all elements that pass the test implemented by the provided function.
const mixedNumbers = [10, 12, 20, 25, 30, 35];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log(`Even Numbers: ${evenNumbers}`); // Output: Even Numbers: 10,12,20,30

// reduce array iteration method executes a reducer function on each element of the array, resulting in a single output value.
const values = [5, 10, 15, 20];
const total = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Total: ${total}`); // Output: Total: 50

// example of using reduce to find the maximum value in an array
const numsForMax = [3, 7, 2, 9, 4];
const maxNum = numsForMax.reduce((max, current) => (current > max ? current : max), numsForMax[0]);
console.log(`Maximum Number: ${maxNum}`); // Output: Maximum Number: 9