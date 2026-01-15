let arr = [3,7,2,8,10,5];
let highestEven = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > highestEven) {
        highestEven = arr[i];
    }
}
console.log("The highest even number is:", highestEven);
