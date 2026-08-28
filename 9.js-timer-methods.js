//JS default timer methods: setTimeOut, setInterval:

// syntax: setTimeOut(fn, delay)-> one time execution
setTimeout(() => {
  console.log("Hello");
}, 5000);
console.log("A");

//How to withdraw setTimeOut:
// const clear = setTimeout(() => {
//   console.log("Greetings");
// });
// clearTimeout(clear);

//setInterval: same task , repetitively doing. -> Multiple times execution.

let count = 0;
setInterval(() => {
  count++;
  console.log(`Value executed ${count} times.`);
}, 1000);
