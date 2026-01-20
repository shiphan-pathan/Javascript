let arr = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even:", evenCount); // 3
console.log("Odd:", oddCount);   // 3
