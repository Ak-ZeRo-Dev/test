document.addEventListener("DOMContentLoaded", () => {
  let data = '';
  (async function get() {
    const res = await fetch(
      "https://ak-zero-server.vercel.app/api/leetcode?username=akzero-dev",
      mode: 'cors',
    );
    return (data = await res.json());
  })();

  document.querySelector(".btn").onClick = () =>
    (document.querySelector(".test").innerHTML = JSON.stringify(data));
});
