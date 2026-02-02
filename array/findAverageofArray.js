let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let average = sum / arr.length;
console.log(average); // 30

// function to find average of array

function findAvg(arr){
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }
  
  let avg = sum / arr.length
  
  return avg;
}

console.log(findAvg(arr))