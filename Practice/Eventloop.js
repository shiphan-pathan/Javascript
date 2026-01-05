// Event Loop in JavaScript
// The event loop is an important concept in JavaScript that enables asynchronous programming by 
// handling tasks efficiently. Since JavaScript is single-threaded, it uses the event loop to manage 
// the execution of multiple tasks without blocking the main thread.

//intervie answer
// The Event Loop continuously checks the call stack and task queues and pushes callbacks to the call stack when it is empty.

// Q1: Is JavaScript single-threaded?
// 👉 Yes, but async tasks are handled via the event loop.

// Q2: Why do Promises execute before setTimeout?
// 👉 Because Promises go into the microtask queue, which has higher priority.

// Q3: Can the event loop starve tasks?
// 👉 Yes, if microtasks keep adding more microtasks.

// Q4: What happens if call stack is not empty?
// 👉 Event loop waits until it becomes empty.

// Q5: Does async/await block the call stack?
// 👉 No. await pauses the function, not the thread.