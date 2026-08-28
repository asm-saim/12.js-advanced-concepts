//Promise with then , catch:
function withThenCatch() {
  const res = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
}

//Promise with async , await. It makes the Promise object more easier.
async function titleCatcher() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  //   console.log(data);

  const allTitle = data.map((title) => title.name);
  console.log(allTitle);
}

titleCatcher();

//If we want to handle eh error , async, await, we can use try, catch, finally
async function titleErrorCatcher() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/usersjj");
    const data = await res.json();
    //   console.log(data);
    const allTitle = data.map((title) => title.name);
    console.log(allTitle);
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("Finally executed");
  }
}

titleErrorCatcher();
