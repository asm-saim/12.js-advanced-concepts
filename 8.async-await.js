async function titleCatcher() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
//   console.log(data);

  const allTitle = data.map((title) => title.name);
  console.log(allTitle);
}

titleCatcher();
