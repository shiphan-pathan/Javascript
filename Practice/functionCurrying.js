// function currying means transforming a function that takes multiple arguments
// into a sequence of functions that each take a single argument.

function add(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Example usage:
const result = add(2)(3)(4); // returns 9
console.log(result); // Output: 9