let num = 153;
let temp = num;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum = sum + (digit * digit * digit);
  temp = (temp - digit) / 10;
}

if (sum === num) {
  console.log("Armstrong number");
} else {
  console.log("Not an Armstrong number");
}
