const get = async () => {
  const res = await fetch(
    "http://localhost:3050/api/leetcode?username=akzero-dev"
  );
  return await res.json();
};

const data = get()
console.log(data)

document.querySelector(".test").innerHTML = JSON.stringify(data);
