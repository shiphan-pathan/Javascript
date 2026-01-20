let arr = [1, 2, 3, 2, 4, 1];
let unique = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    unique.push(arr[i]);
  }
}

console.log(unique); // [1, 2, 3, 4]


// explanation:
// 1. We create an empty object `map` to keep track of the elements we have seen.
// 2. We also create an empty array `result` to store the unique elements.
// 3. We iterate through each element in the input array `arr`.
// 4. For each element, we check if it is already present in the `map` object.
// 5. If it is not present, we add it to the `map` and also push it to the `result` array.
// 6. Finally, we return the `result` array which contains only unique elements.

// using Set
function removeDuplicateUsingSet(arr) {
    return Array.from(new Set(arr));
}
console.log(removeDuplicateUsingSet([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// explanation:
// 1. We create a new Set from the input array `arr`. A Set automatically removes duplicate values.
// 2. We then convert the Set back into an array using `Array.from()`.
// 3. Finally, we return the new array which contains only unique elements.

