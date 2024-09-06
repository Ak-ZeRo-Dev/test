document.addEventListener('DOMContentLoaded', () => {
  const get = async () => {
    const res = await fetch(
      "https://ak-zero-server-2oyk1kyv8-akzeros-projects.vercel.app/api/leetcode?username=akzero-dev"
    )
    const data = await res.json();
    return data
  };
  
  
  document.querySelector(".test").innerHTML = JSON.stringify(get());
  
})
