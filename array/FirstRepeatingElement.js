let arr = [1, 2, 3, 4, 2, 5, 3];
let firstRepeating = -1;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      firstRepeating = arr[i];
      break;
    }
  }
  if (firstRepeating !== -1) break;
}

console.log(firstRepeating); // 2
