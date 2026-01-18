let str = "javascript";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (i === 2 || i === 5 || i === 7) {
    result += "X";   
  } else {
    result += str[i]; 
  }
}

console.log(result);




