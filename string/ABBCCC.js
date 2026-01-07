const input = "A1B2C3";
let result = "";

for (let i = 0; i < input.length; i += 2) {
  result += input[i].repeat(input[i + 1]);
}

console.log(result);
