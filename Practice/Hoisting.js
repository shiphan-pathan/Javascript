// “Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope before execution.”
// This means that variable and function declarations are processed before any code is executed.

//Variable Hoisting with var
console.log(a); // undefined
var a = 5;

//Variable Hoisting with let and const
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// Function declaration Hoisting 
greet(); // Output: Hello, World!
function greet() {
    console.log("Hello, World!");
}

// Function expression Hoisting
// greetExpr(); // TypeError: greetExpr is not a function
var greetExpr = function() {
    console.log("Hello from function expression!");
};
greetExpr(); // Output: Hello from function expression!

//Hoisting with let and const in functions

function test() {
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 20;
    console.log(x); // Output: 20
}
test();

// Re-declared variables with var
var c = 1;
var c = 2;
console.log(c); // Output: 2

//hoisted function with parameters
test(10); // Output: Parameter is 10
function test(param) {
    console.log("Parameter is " + param);
}

// Hoisting in nested functions

function outer() {
    console.log(innerVar); // undefined
    var innerVar = "I'm inside outer function";
    function inner() {
        console.log("Inner function called");
    }
    inner(); // Output: Inner function called
}
outer();

// Summary:
// 1. Variables declared with var are hoisted and initialized with undefined.
// 2. Variables declared with let and const are hoisted but not initialized, leading to a temporal dead zone.
// 3. Function declarations are hoisted completely, allowing them to be called before their definition.
// 4. Function expressions assigned to variables declared with var are hoisted as undefined, leading to errors if called before assignment.

