//programming paradigm:
//OOP
//Functional Paradigm

// 1. Pure Function: A pure function is a function that:
// Gives the same output for the same input
// Does not change anything outside itself (no side effects)
function sqrt(a) {
  return a * a;
}
console.log(sqrt(5));
console.log(sqrt(5));

//Impure function: Because it changes the outside variable number.
let number = 10;
function sum() {
  number += 10;
  return number;
}
console.log(sum());
console.log(sum());
console.log(sum());

// First-class function = functions can be treated like values.

function greeting(fn) {
  fn();
}

function sayHi() {
  console.log("Hi");
}
greeting(sayHi);

//3. Higher-Order Function: A higher-order function (HOF) is a function that does at least one of these:
// 1. Takes another function as an argument
// 2. Returns another function

//ex1:
function execute(fn) {
  fn();
}
function greet() {
  console.log("Greetings!");
}
execute(greet);

//ex2: Example 2: Returns a function

function multiply(number) {
  return function res(value) {
    return value * number;
  };
}

const output = multiply(5);
console.log(output(5))
