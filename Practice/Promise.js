// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

// promise states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Operation completed successfully.
// 3. Rejected: Operation failed.

const myPromise = new Promise((resolve, reject) => {
    const success = true; // Change to false to test rejection

    if (success) {
        resolve("Promise fulfilled successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Consuming the promise using .then() and .catch()
myPromise
    .then((message) => { //then() is called when the promise is fulfilled
        console.log(message); // Output: Promise fulfilled successfully!
    })
    .catch((error) => {//catch() is called when the promise is rejected
        console.error(error); // Output: Promise rejected!
    })
    .finally(() => { //finally() is called regardless of the promise outcome
        console.log("Promise has been settled (either fulfilled or rejected).");
    });


// Using async/await to consume the promise
async function consumePromise() {
    try {
        const message = await myPromise;
        console.log(message); // Output: Promise fulfilled successfully!
    } catch (error) {
        console.error(error); // Output: Promise rejected!
    }
}

consumePromise();