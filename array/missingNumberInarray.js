function findMissing(arr, n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  for (let i = 0; i < arr.length; i++) {
    total -= arr[i];
  }

  return total;
}

console.log(findMissing([1, 2, 4, 5], 5));

// explanation:
// 1. We define a function `findMissing` that takes an array `arr` and a number `n` as input.
// 2. We initialize a variable `total` to store the sum of the first `n` natural numbers.   
// 3. We use a loop to calculate the sum of the first `n` natural numbers and store it in `total`.
// 4. We then iterate through the input array `arr` and subtract each element from `total`.
// 5. After processing all elements in the array, `total` will hold the value of the missing number.
// 6. Finally, we return the value of `total` and print the result.
