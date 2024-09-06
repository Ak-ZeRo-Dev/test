document.addEventListener("DOMContentLoaded", () => {
  let data = '';
  (async function get() {
    const res = await fetch(
      "http://localhost:3050/api/leetcode?username=akzero-dev"
    );
    return (data = await res.json());
  })();

  document.querySelector(".btn").onClick = () =>
    (document.querySelector(".test").innerHTML = JSON.stringify(data));
});
