const get = async () => {
  const res = await fetch(
    "https://ak-zero-server.vercel.app/api/leetcode?username=akzero-dev"
  );
  return await res.json();
};

document.querySelector(".test").innerHTML = JSON.stringify(get());
