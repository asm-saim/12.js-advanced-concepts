//Onek gula nested callback hile, tokhon callback hell create hoi.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  resolve("Promise 2 resolved");
}, 1000);

p1.then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});

p2.then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});
