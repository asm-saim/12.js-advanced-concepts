//Callback function - A callback function is a function that is passed as an argument to another function.
// I will callback later.

function sum(a, b, cb) {
  const total = a + b;
  cb(total);
}

function callBackSum(something) {
  console.log(something);
}
sum(10, 10, callBackSum);
