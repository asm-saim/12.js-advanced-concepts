// Execution Context → a workspace where JavaScript runs code.
// Function Execution Context → a workspace created when a function runs.
// Call Stack → keeps track of what is currently running.

//execution context:
let a = 40;
console.log(a);
//function execution context:
function color() {
  let flagColor = "green";
  console.log(flagColor);
}
color();

//call stack:
function one() {
  two();
  console.log("THis is one");
}
function two() {
  thee();
  console.log("THis is two");
}
function thee() {
  console.log("THis is three");
}
one();
