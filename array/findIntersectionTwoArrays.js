let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {

    if (arr1[i] === arr2[j]) {
      console.log(arr1[i]);
      break; 
    }

  }
}

// function to find intersection of two arrays


function findIntersection(arr , arr2){
  
  let result = []
  let index = 0;
  
  for(let i=0; i < arr.length; i++){
    for(let j=0; j < arr2.length; j++){
      if(arr[i] === arr2[j]){
        result[index] = arr[i]
        index ++;
      }
    }
  }
  return result
}

console.log(findIntersection(arr, arr2))
