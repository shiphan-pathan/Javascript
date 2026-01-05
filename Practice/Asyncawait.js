// Async and Await in JavaScript are used to simplify handling asynchronous operations using promises. 
// By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier 
// to manage complex asynchronous flows.

// Example of using async/await
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function getData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Waits for the promise to resolve
    console.log(data); // Output: Data fetched successfully!
}   

getData();
// Output:
// Fetching data...
// (after 2 seconds)
// Data fetched successfully!

// Q1: What does the 'async' keyword do?
// 👉 It declares a function as asynchronous and allows the use of 'await' inside it
// Q2: What does the 'await' keyword do?
// 👉 It pauses the execution of an async function until the promise is resolved or rejected
// Q3: Can 'await' be used outside of an async function?
// 👉 No, 'await' can only be used inside an async function.
// Q4: How does async/await improve code readability?
// 👉 It allows asynchronous code to be written in a synchronous style, making it easier to understand and maintain .