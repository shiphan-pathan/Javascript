function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));   // true
console.log(isSorted([1, 3, 2, 4, 5]));   // false


// explanation:
// 1. We define a function `isSorted` that takes an array `arr` as input.
// 2. We iterate through the array from the first element to the second last element.
// 3. In each iteration, we compare the current element with the next element.
// 4. If we find any element that is greater than the next element, we return `false`, indicating that the array is not sorted.
// 5. If we complete the loop without finding any such elements, we return `true`, indicating that the array is sorted in ascending order.
