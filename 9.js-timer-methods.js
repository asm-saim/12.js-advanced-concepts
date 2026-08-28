//JS default timer methods: setTimeOut, setInterval 
// Also for clear we use clearTimeOut(), clearInterval()

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

// Using clearInterval:
let value = 0;
const timer = setInterval(() => {
  value++;
  console.log(`Value executed ${value} times.`);
  if (value === 5) {
    clearInterval(timer);
  }
}, 1000);

//How to set countdown timer form current time:
setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);
}, 1000);
