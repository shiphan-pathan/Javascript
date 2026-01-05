// this keyword in JavaScript

// The this keyword in JavaScript refers to the object that is calling the function.
// But its value changes depending on how a function is called, not where it is written.

//this inside in Object Method

const person = {
    firstName: "John",
    lastName: "Doe",
    greet() {
        console.log(this.lastName);
    }
};
person.greet(); // Output: Doe


// this in Global Context
function show() {
  console.log(this);
}
show();

// this in Arrow Function

const arrowFunc = () => {
    console.log(this);
}
arrowFunc(); // Output: Window object (in browsers) or global object (in Node.js)


const obj = {
    name: "Alice",
    normal(){
        const arrow = () => {
            console.log(this.name);
        }   
        arrow();
    }
};
obj.normal(); // Output: Alice

// this in Constructor Function

function Person(name) {
  this.name = name;
}

const p1 = new Person("John");
console.log(p1.name); // John

