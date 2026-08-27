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

function greet(fn) {
  fn();
}

function sayHi() {
  console.log("Hi");
}
greet(sayHi);
