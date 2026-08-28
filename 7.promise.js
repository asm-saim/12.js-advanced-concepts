/*
Onek gula nested callback hile, tokhon callback hell create hoi. tai Promise object lage.

Promise: A Promise in JavaScript is an object that represents the future result of an asynchronous operation.

The easiest way to understand it is:
Promise = "I don't have the result yet, but I promise I'll give you the result later."
*/
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

//real life example:
function parcelStat(item) {
  console.log(`${item} is processing...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let value = Math.random() > 0.7;
      if (value) {
        resolve(`${item} is delivered`);
      } else {
        reject(new Error(`${item} is not delivered`));
      }
    }, 2000);
  });
}

parcelStat("Dell - Precision")
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e.message);
  })
  .finally(() => {
    console.log("Parcel delivered successfully");
  });

//promise.all
// Promise.all([p1, p2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//promise.race
// Promise.race([p1, p2])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
