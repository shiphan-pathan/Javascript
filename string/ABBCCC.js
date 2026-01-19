const input = "A1B2C3";
let result = "";

for (let i = 0; i < input.length; i += 2) {
  const char = input[i];
  const count = input[i + 1] - '0';
    
  for (let j = 0; j < count; j++) {
        result += char;
    }
}
console.log(result); // Output: "ABBBCCCCC"

// explanation:
// 1. We initialize an empty string `result` to store the final output.
// 2. We loop through the input string in steps of 2, where `i` points to the character and `i + 1` points to the digit.
// 3. We extract the character at position `i` and convert the character at position `i + 1` to a number by subtracting the character '0'.
// 4. We use a nested loop to append the character to `result` the specified number of times.
// 5. Finally, we print the resulting string.




