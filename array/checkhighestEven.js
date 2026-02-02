let arr = [3, 7, 2, 8, 10, 5]
let highest =-1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {       
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
}

console.log(highest)


function highestEven(arr){
  let highest = 0;
  
  for(let i=0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      if(arr[i] > highest){
        highest = arr[i]
      }
    }
  }
  return highest
}

console.log(highestEven(arr))