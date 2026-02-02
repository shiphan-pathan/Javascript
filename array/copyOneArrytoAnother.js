let arr1 = [1, 2, 3, 4];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2[i] = arr1[i];
}

console.log(arr2); 

// function to copy array

function copyarr(arr){
  let arr2 = []
  
  for(let i=0; i< arr.length; i++){
    arr2[i] = arr[i]
  }
  
  return arr2
}

console.log(copyarr(arr))
