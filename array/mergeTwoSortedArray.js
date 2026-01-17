function mergeSortedArrays(arr1, arr2) {
  let i = 0, j = 0, k = 0;
  const result = new Array(arr1.length + arr2.length);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result[k] = arr1[i];
      i++;
    } else {
      result[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < arr1.length) {
    result[k] = arr1[i];
    i++;
    k++;
  }

  while (j < arr2.length) {
    result[k] = arr2[j];
    j++;
    k++;
  }

  return result;
}

console.log(mergeSortedArrays([1,3,5,7], [2,4,6,8]));

// explanation:
// 1. We define a function `mergeSortedArrays` that takes two sorted arrays `arr1` and `arr2` as input.
// 2. We initialize three pointers `i`, `j`, and `k` to track the current index of `arr1`, `arr2`, and the result array respectively.
// 3. We create a new array `result` to hold the merged sorted elements, with a size equal to the sum of the lengths of `arr1` and `arr2`.
// 4. We use a while loop to iterate through both arrays until we reach the end of one of them.
// 5. In each iteration, we compare the current elements of `arr1` and `arr2`. The smaller element is added to the `result` array, and the corresponding pointer (`i` or `j`) is incremented.
// 6. After exiting the first loop, we use two additional while loops to add any remaining elements from `arr1` or `arr2` to the `result` array.
// 7. Finally, we return the `result` array which contains all elements from both input arrays in sorted order.

