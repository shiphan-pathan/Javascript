let arr = [1, 2, 2 , 3, 4, 4, 5];
let uniqueArr = [];

for(let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for(let j = 0; j < uniqueArr.length; j++) {
        if(arr[i] === uniqueArr[j]) {
            isDuplicate = true;
            break;
        }
    }

    if(!isDuplicate) {
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr);

//with Set

let arr2 = [1, 2, 2 , 3, 4, 4, 5];

let uniqueArr2 = [...new Set(arr2)];
console.log("with Set:", uniqueArr2);
