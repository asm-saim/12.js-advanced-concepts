//this keyword: this usually refers to the object that is calling the function.

// 1. this inside an object:
const info = {
  name: "JK",
  greet: function () {
    console.log(this.name);
  },
};
info.greet();

//2. Change the object:
const person1 = {
  name: "Fahim",
  greet: function () {
    console.log(this.name);
  },
};

const person2 = {
  name: "Rafiq",
  greet: person1.greet,
};
person1.greet();
person2.greet();
