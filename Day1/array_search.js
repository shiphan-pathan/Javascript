// indexOf() method searches an array for a specified item and returns its position.
// If the item is not found, it returns -1.
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

const searchFruit = 'orange';
const index = fruits.indexOf(searchFruit);
console.log(`The index of ${searchFruit} is: ${index}`); // Output: The index of orange is: 2

const missingFruit = 'kiwi';
const missingIndex = fruits.indexOf(missingFruit);
console.log(`The index of ${missingFruit} is: ${missingIndex}`); // Output: The index of kiwi is: -1


// lastIndexOf() method searches an array for a specified item from the end to the beginning and returns its position.
// If the item is not found, it returns -1.
const numbers = [1, 2, 3, 4, 5, 6, 3, 7, 8, 9];  
const searchNumber = 3;
const lastIndex = numbers.lastIndexOf(searchNumber);
console.log(`The last index of ${searchNumber} is: ${lastIndex}`); 

// includes() method checks if an array contains a specified item and returns true or false.
const vegetables = ['carrot', 'broccoli', 'spinach', 'potato'];
const searchVegetable = 'spinach';
const hasVegetable = vegetables.includes(searchVegetable);
console.log(`Does the array include ${searchVegetable}? ${hasVegetable}`); // Output: Does the array include spinach? true

const missingVegetable = 'cabbage';
const hasMissingVegetable = vegetables.includes(missingVegetable);
console.log(`Does the array include ${missingVegetable}? ${hasMissingVegetable}`); // Output: Does the array include cabbage? false

// find() method returns the value of the first element in an array that satisfies a provided testing function.
const ages = [12, 17, 22, 30, 15, 18, 25];
const adultAge = ages.find(age => age >= 18);
console.log(`The first adult age is: ${adultAge}`); // Output: The first adult age is: 22

// findIndex() method returns the index of the first element in an array that satisfies a provided testing function.
const firstAdultIndex = ages.findIndex(age => age >= 18);
console.log(`The index of the first adult age is: ${firstAdultIndex}`); // Output: The index of the first adult age is: 2   

// findlast() method returns the value of the last element in an array that satisfies a provided testing function.
const lastAdultAge = ages.findLast(age => age >= 18);
console.log(`The last adult age is: ${lastAdultAge}`); // Output: The last adult age is: 18

