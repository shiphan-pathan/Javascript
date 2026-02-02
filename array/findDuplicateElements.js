let arr = [1, 2, 3, 2, 4, 5, 1];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    
    if (arr[i] === arr[j]) {
      console.log(arr[i]);
      break; 
    }

  }
}

// function to find duplicate elements in an array

function findDuplicate(arr){
  
  for(let i = 0; i < arr.length; i++){
    for(j = i+1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        return arr[i]
      }
    }
  }
  
  return -1;
}

console.log(findDuplicate(arr))
