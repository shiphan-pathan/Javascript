// What is Scope?
// Scope defines where a variable, function, or object is accessible in JavaScript.

// Global Scope
let x =10; // Global variable

function show() {
    console.log(x); // Accessing global variable

}
show(); // Output: 10
console.log(x); // Output: 10

// function scope

function test(){
    let y = 20; // Local variable
    console.log(y); // Accessing local variable

}
test(); // Output: 20
// console.log(y); // Error: y is not defined

// Block Scope
{
    let z = 30; // Block-scoped variable
    var w = 40; // Function-scoped variable
    const p = 50; // Block-scoped constant

}
console.log(w); // Output: 40
// console.log(z); // Error: z is not defined
// console.log(p); // Error: p is not defined

// Lexical Scope

function outerFunction() {
    let outerVar = 'I am from outer function';
    function innerFunction() {
        console.log(outerVar); // Accessing variable from outer function
    }
    innerFunction();
}
outerFunction(); // Output: I am from outer function


