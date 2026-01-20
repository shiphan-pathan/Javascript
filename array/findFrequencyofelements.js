let arr = [1, 2, 2, 3, 1, 4, 2];
let freq = {};

for (let i = 0; i < arr.length; i++) {

  if (freq[arr[i]] === undefined) {
    freq[arr[i]] = 1;
  } else {
    freq[arr[i]]++;
  }

}

console.log(freq);
