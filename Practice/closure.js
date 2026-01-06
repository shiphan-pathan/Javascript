// A closure is created when an inner function remembers and accesses variables from its outer (lexical) 
// scope, even after the outer function has finished executing.

function outer(){
    let outerVar = " I m in outer scope";
    function inner(){
        console.log(outerVar);
        outerVar= "Updated"
    }
    return inner;
}

const closure = outer();
closure(); // Output: " I m in outer scope"
closure(); // Output: "Updated"

// Q1: What is a closure in JavaScript?
// 👉 A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
// Q2: How are closures created?
// 👉 Closures are created when an inner function is defined within an outer function and the inner function accesses variables from the outer function's scope.
// Q3: What are some common use cases for closures?
// 👉 Data privacy, function factories, maintaining state in asynchronous operations, and implementing callbacks.
// Q4: Can closures lead to memory leaks?
// 👉 Yes, if not managed properly, closures can retain references to variables longer than necessary, potentially leading to increased memory usage.