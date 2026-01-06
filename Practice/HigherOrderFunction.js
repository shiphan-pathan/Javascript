
function greet(name) {
    return `Hello, ${name}!`;
}

function higherorder(fn){
    return fn("Alice");
}
console.log(higherorder(greet)); // Output: Hello, Alice!

// higherOrder is a Higher-Order Function
// Because it takes greet as an argument

// map example
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// filter example
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce example
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15

// forEach example
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6, 8, 10