function greaterNearest(arr, target) {

    let result = -1;
    let minDiff = 0;

    for(let i =0; i < arr.length; i++){
        if(arr[i] > target){
            let diff = arr[i] - target;

            if(result === -1 || diff < minDiff){
                minDiff = diff;
                result = arr[i];
            }
        }   
    }   
    return result;
}

console.log(greaterNearest([4, 1, 3, 5, 6], 4)); // 5

function smallerNearest(arr, target) {

    let result = -1;
    let minDiff = 0;

    for(let i =0; i < arr.length; i++){

        if(arr[i] < target){
            let diff = target - arr[i];

            if(result === -1 || diff < minDiff){
                minDiff = diff;
                result = arr[i];
            }   
        }
    }

    return result;
}

console.log(smallerNearest([4, 1, 3, 5, 6], 4)); // 3