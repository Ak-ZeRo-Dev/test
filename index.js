document.addEventListener("DOMContentLoaded", () => {
  let data = '';
  const btn = document.querySelector(".btn");
  const testElement = document.querySelector(".test");

  // Disable the button initially
  btn.disabled = true;

  (async function get() {
    try {
      const res = await fetch(
        "https://ak-zero-server.vercel.app/api/leetcode?username=akzero-dev",
        {
          mode: 'cors'
        }
      );
      data = await res.json();

      // Enable the button after data is fetched
      btn.disabled = false;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  })();

  btn.onclick = () => {
    if (data) {
      testElement.innerHTML = JSON.stringify(data, null, 2);
    } else {
      testElement.innerHTML = "No data available.";
    }
  };
});
