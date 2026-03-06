// Write a JavaScript program to take a number and print the sum of the first and last digit.
//  Example: 10 → 1 + 0 = 1, 452 → 4 + 2 = 6

let num = 16 ;

let first = Math.floor(num/10);
let second = num % 10;

let sum = first + second ;

console.log(sum);

