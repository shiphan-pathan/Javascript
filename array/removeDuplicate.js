function removeDuplicate(arr) {

    let map = {};
    let result = [];

    for(let i=0; i< arr.length; i++) {

        if(!map[arr[i]]) {
            map[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
