function reverse(str) {

    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverse("hello")); 

// explanation: This function takes a string as input and reverses it by iterating from the end of the string to the beginning, appending each character to a new string. Finally, it returns the reversed string.
// Output: "olleh"