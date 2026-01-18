function firstNonRepeatingChar(str) {
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null; 
}

console.log(firstNonRepeatingChar("swiss")); // w


// explanation: This function finds the first non-repeating character in a string by first counting the occurrences of each character using an object, and then iterating through the string again to find the first character with a count of one. If no such character exists, it returns null.
// Output: "w"

