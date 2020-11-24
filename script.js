let clock = document.querySelector(".clock");

// This functions grabs the current time 
function time() {
  let date = new Date();
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() :
   date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() :
   date.getSeconds();
  let am_pm = date.getHours() >= 12 ? "PM" : "AM" 
  clock.textContent = `${hours}:${minutes}:${seconds}${am_pm}`;   
}

time();
setInterval(() => {
  time()}, 1000);

  

