let arr = [1,2,3,5,4]
// let isSorted = true;

// for(let i=0; i < arr.length-1; i++){
//   if(arr[i] > arr[i+1]){
//     isSorted = false;
//   }
// }

// console.log(isSorted);

function sortedarrornot(arr){
  
  let isSorted = true;
  
  for(let i =0; i < arr.length-1; i++){
    if(arr[i] > arr[i+1]){
      isSorted = false
    }
  }
  
  return isSorted;
}

console.log(sortedarrornot(arr))


