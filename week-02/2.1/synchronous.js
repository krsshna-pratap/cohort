// synchronous code 

// io heavier operations 

const fs = require("fs");

const contents1 = fs.readFileSync("a.txt", "utf-8");
console.log(contents1);

// read multiple files  

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

const contents3 = fs.readFileSync("c.txt", "utf-8");
console.log(contents3);

// functional arguments 

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, b, operation) {
  return operation(a, b);
}

// first approach ~ call respective functions 
console.log(divide(100, 2));

// second approach ~ pass what needs to be done as argument  
console.log(operate(100, 500, subtract));