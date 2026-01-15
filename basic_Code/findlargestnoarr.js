let arr = [2,10,5,8];
let largest = arr[0];

for(let i=1; i< arr.length; i++) {
    if(arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

let smallest = arr[0];

for(let i=1; i< arr.length; i++) {
    if(arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(smallest);