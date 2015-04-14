var ask = require('readline-sync');

console.log('This program will add numbers together! Enter the number now ');
var a = ask.question();
console.log('Enter in one of the following operators (+ - * /)');
var c = ask.question();
console.log('Enter the second number now ');
var b = ask.question();
a = parseInt(a);
b = parseInt(b);

console.log(a + c + b);