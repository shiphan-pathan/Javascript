let str = "hello";
let result = "";

result = str[str.length - 1];

for (let i = 1; i < str.length - 1; i++) {
  result += str[i];
}

result += str[0];

console.log(result); // oellh
