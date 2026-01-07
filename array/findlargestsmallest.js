function findlargestSmallest(arr) {

    let largest = arr[0];
    let smallest = arr[0];

    for(let i =1; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
        if(arr[i] < smallest) {
            smallest = arr[i];
        }

    }
    return {largest, smallest};
}
console.log(findlargestSmallest([3, 5, 1, 8, -2, 7])); // { largest: 8, smallest: 1 }
