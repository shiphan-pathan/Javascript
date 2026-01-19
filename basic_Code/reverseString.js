let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed); // olleh

//explanation points:
// 1. We initialize a string variable `str` with the value "hello".
// 2. We create an empty string variable `reversed` to store the reversed version of `str`.
// 3. We use a for loop that starts from the last index of `str` (str.length - 1) and decrements to 0.
// 4. Inside the loop, we append each character of `str` to `reversed` in reverse order.
// 5. Finally, we print the reversed string to the console.