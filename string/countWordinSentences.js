let str = "I love JavaScript";
let count = 1; //1 for  space between words

for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    count++;
  }
}

console.log(count); // 3
