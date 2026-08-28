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
