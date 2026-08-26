function avg(art, stat) {
  console.log(this);

  const total = (this.math + this.chemistry + art + stat) / 4;
  console.log(total);
}

const marks = {
  math: 56,
  chemistry: 78,
};

//for instant calling:
avg.call(marks, 45, 79);
avg.apply(marks, [34, 67]);
