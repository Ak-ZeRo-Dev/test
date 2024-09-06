document.addEventListener("DOMContentLoaded", () => {
  let data = '';
  (async function get() {
    const res = await fetch(
      "https://ak-zero-server-2oyk1kyv8-akzeros-projects.vercel.app/api/leetcode?username=akzero-dev"
    );
    return (data = await res.json());
  })();

  document.querySelector(".btn").onClick = () =>
    (document.querySelector(".test").innerHTML = JSON.stringify(data));
});
