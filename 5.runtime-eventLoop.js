// 2. What is the Event Loop?
//The event loop is a mechanism that helps JavaScript handle asynchronous tasks without blocking the main thread.

console.log(100);

setTimeout(() => {
  console.log(200);
}, 500);

setTimeout(() => {
  console.log(300);
}, 300);
