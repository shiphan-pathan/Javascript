function firstNonRepeatingChar(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    count[str[i]] = (count[str[i]] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}
console.log(firstNonRepeatingChar("swiss")); // Output: "w"

// IF i WANT SECOND NON REPEATING CHARACTER WIHOUT ANY METHODS

function secondNonRepeatingChar(str) {
    let count = {};
    let firstNonRepeatingFound = false;

    for (let i = 0; i < str.length; i++) {
      count[str[i]] = (count[str[i]] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            if (firstNonRepeatingFound) {
                return str[i];
            }
            firstNonRepeatingFound = true;
        }
    }
    return null; 
  }
    console.log(secondNonRepeatingChar("swiss")); // Output: "i"