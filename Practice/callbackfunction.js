// A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation is completed.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("John", sayBye); // sayBye is the callback function
// Output:
// Hello John
// Goodbye!

