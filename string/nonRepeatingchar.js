let str = "aabbcdde";

for (let i = 0; i < str.length; i++) {
  let isUnique = true;

  for (let j = 0; j < str.length; j++) {
    if (i !== j && str[i] === str[j]) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) {
    console.log(str[i]); // c
    break;
  }
}
