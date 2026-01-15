let num = 5;
let factorial = 1;

for(let i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// explanation:
// factorial of 5 = 5*4*3*2*1 = 120

//explanation of code:
// 1. we initialize num with the value whose factorial we want to calculate.
// 2. we initialize factorial variable with 1 to store the result.
// 3. we use a for loop that runs from 1 to num (inclusive).
// 4. inside the loop, we multiply the current value of factorial with the loop counter i and update factorial.
// 5. after the loop ends, we print the final value of factorial, which is the factorial of num.

