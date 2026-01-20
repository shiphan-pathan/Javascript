let arr = [1, 2, 3, 2, 1, 4, 3];
let firstNonRepeating = -1;

for (let i = 0; i < arr.length; i++) {
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }

  if (count === 1) {
    firstNonRepeating = arr[i];
    break;
  }
}

console.log(firstNonRepeating); 
