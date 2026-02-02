let arr = [10, 20, 30, 40];
let target = 30;
let index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    index = i;
    break;
  }
}

console.log(index); // 2

// function to find index of specific element in array

function findindexElement(arr, target){
  
  let index = -1;
  
  for(let i=0; i < arr.length; i++){
    if(arr[i] === target){
      index = i
    }
  }
   return index
}

console.log(findindexElement(arr, target))