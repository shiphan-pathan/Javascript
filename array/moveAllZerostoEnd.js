let arr = [0, 1, 0, 3, 12];
let result = [];
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    result[result.length] = arr[i];
  } else {
    zeroCount++;
  }
}

for (let i = 0; i < zeroCount; i++) {
  result[result.length] = 0;
}

console.log(result);
