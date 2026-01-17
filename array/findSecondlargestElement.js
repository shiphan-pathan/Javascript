const arr = [10, 5, 20, 8, 15];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log("Second Largest:", secondLargest);

// explanation:
// 1. We initialize two variables, `largest` and `secondLargest`, to negative infinity to ensure any number in the array will be larger.
// 2. We iterate through each element in the array `arr`.
// 3. If the current element is greater than `largest`, we update `secondLargest` to be the current `largest`, and then update `largest` to be the current element.
// 4. If the current element is not greater than `largest` but is greater than `secondLargest` and not equal to `largest`, we update `secondLargest` to be the current element.
// 5. Finally, we print the value of `secondLargest`, which holds the second largest element in the array.
