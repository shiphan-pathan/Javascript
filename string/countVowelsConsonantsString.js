let str = " Hello World!";
let vowelsCount = 0;
let consonantsCount = 0;

for(let i =0; i < str.length; i++) {
    let ch = str[i]
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
       ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
        vowelsCount++;
    } else if( (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') ) {
        consonantsCount++;
    }
}

console.log("Vowels: " + vowelsCount);
console.log("Consonants: " + consonantsCount);