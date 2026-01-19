let str = "javascript";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    result += "*";
  } else {
    result += str[i];
  }
}

console.log(result);

// odd

let str1 = "javascript";
let result1 = "";

for (let i = 0; i < str1.length; i++) {
  if (i % 2 !== 0) {
    result1 += "*";
  } else {
    result1 += str1[i];
  }
}

console.log(result1);