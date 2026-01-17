function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n; 

  for (let i = 0; i < k; i++) {

    let last = arr[n - 1];

    for (let j = n - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }

    arr[0] = last;
  }

  return arr;
}

console.log(rotateRight([1,2,3,4,5], 1));

// explanation:
// 1. We define a function `rotateRight` that takes an array `arr` and a number `k` as input.
// 2. We calculate the effective number of rotations needed by taking `k` modulo the length of the array `n`.
// 3. We use a loop to perform the rotation `k` times.
// 4. In each rotation, we store the last element of the array in a variable `last`.
// 5. We then shift all elements of the array one position to the right.
// 6. After shifting, we place the stored `last` element at the first position of the array.
// 7. Finally, we return the rotated array and print the result.



function rotateLeft(arr, k) {
  const n = arr.length;
  k = k % n;

  for (let i = 0; i < k; i++) {
    let first = arr[0];

    for (let j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1];
    }

    arr[n - 1] = first;
  }

  return arr;
}

console.log(rotateLeft([1,2,3,4,5], 2));

// explanation:
// 1. We define a function `rotateLeft` that takes an array `arr` and a number `k` as input.
// 2. We calculate the effective number of rotations needed by taking `k` modulo the length of the array `n`.
// 3. We use a loop to perform the rotation `k` times.
// 4. In each rotation, we store the first element of the array in a variable `first`.
// 5. We then shift all elements of the array one position to the left.
// 6. After shifting, we place the stored `first` element at the last position of the array.
// 7. Finally, we return the rotated array and print the result.
