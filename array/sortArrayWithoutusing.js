let arr = [5, 2, 8, 1, 3];
let temp;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {

    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

  }
}

console.log(arr);


// sorting in descending order
let arrDesc = [5, 2, 8, 1, 3];
let tempDesc;

for (let i = 0; i < arrDesc.length; i++) {
  for (let j = i + 1; j < arrDesc.length; j++) {
    if (arrDesc[i] < arrDesc[j]) {
      tempDesc = arrDesc[i];
      arrDesc[i] = arrDesc[j];
      arrDesc[j] = tempDesc;
    }
  }
}
console.log(arrDesc);