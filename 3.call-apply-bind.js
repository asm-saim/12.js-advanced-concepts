function avg(art, stat) {
  console.log(this);

  const total = (this.math + this.chemistry + art + stat) / 4;
  console.log(total);
}

const marks = {
  math: 56,
  chemistry: 78,
};

//for instant calling: call, apply
avg.call(marks, 45, 79); //marks holo this er value
avg.apply(marks, [34, 67]); //marks holo this er value

//bind method: akon bind kore raklam, pore proyojon onujai call korlam.
const bindCreating = avg.bind(marks);
bindCreating(78, 32);
