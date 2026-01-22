let str = "Hello, World!";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        result += '_';
    }
    else {
        result += str[i];
    }
}
console.log(result); // Output: "Hello,_World!"