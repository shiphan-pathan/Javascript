// sort()   method sorts the elements of an array in place and returns the sorted array.
const fruits = ['banana', 'apple', 'orange', 'grape', 'mango'];
fruits.sort();
console.log('Sorted fruits:', fruits); // Output: Sorted fruits: [ 'apple', 'banana', 'grape', 'mango', 'orange' ]

// reverse() method reverses the order of the elements in an array in place and returns the reversed array.
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log('Reversed numbers:', numbers); // Output: Reversed numbers: [ 5, 4, 3, 2, 1 ]

// toSorted() method returns a new array with the elements sorted in ascending order without modifying the original array.
const originalArray = [5, 3, 8, 1, 2];
const sortedArray = originalArray.toSorted();
console.log('Original array:', originalArray); // Output: Original array: [ 5, 3, 8, 1, 2 ]

// toReversed() method returns a new array with the elements in reverse order without modifying the original array.
const anotherArray = [10, 20, 30, 40, 50];
const reversedArray = anotherArray.toReversed();
console.log('Another array:', anotherArray); // Output: Another array: [ 10, 20, 30, 40, 50 ]   

// sorting object arrays
const items = [
    { name: 'item1', value: 10 },
    { name: 'item2', value: 5 },
    { name: 'item3', value: 20 }
];
items.sort((a, b) => a.value - b.value);
console.log('Sorted items by value:', items); 
// Output: Sorted items by value: [ { name: 'item2', value: 5 }, { name: 'item1', value: 10 }, { name: 'item3', value: 20 } ]

