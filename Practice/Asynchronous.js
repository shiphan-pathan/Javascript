// Synchronous code executes line by line, and each operation blocks the next one until it finishes.
// One task at a time
// Slow operations freeze execution

//Asynchronous code allows multiple tasks to run concurrently without waiting for each other to complete.
// Non-blocking operations
// Faster and more efficient execution

// Example of asynchronous code using setTimeout
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");


// Q1: Is JavaScript synchronous or asynchronous?
// 👉 JavaScript is synchronous but can handle asynchronous operations using the event loop.

// Q2: Does async/await make JavaScript multi-threaded?
// 👉 No, it only simplifies promise handling.

// Q3: Which is faster: sync or async?
// 👉 Async, for I/O operations.

// Q4: What happens if async code fails?
// 👉 Handle using .catch() or try...catch.

// 📌 One-Line Interview Answer (Memorize This)
// Synchronous JavaScript blocks execution, while asynchronous JavaScript allows non-blocking operations using callbacks, promises, and async/await.

