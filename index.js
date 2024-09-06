const get = async () => {
  const res = await fetch(
    "http://localhost:3050/api/leetcode?username=akzero-dev"
  );
  return await res.json();
};

document.querySelector(".test").innerHTML = JSON.stringify(get());
