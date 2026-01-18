function findLongestWord(sentence) {
  let currentWord = "";
  let longestWord = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      currentWord += sentence[i];
    } else {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = "";
    }
  }

  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); 