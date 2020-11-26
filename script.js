let clock = document.querySelector(".clock");

// This functions grabs the current time 
function time() {
  let date = new Date();
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let am_pm = date.getHours() >= 12 ? "PM" : "AM" 
  clock.textContent = `${hours}:${minutes}:${seconds}${am_pm}`;
  
// Three variables are created to determine what part of the day it is: Morn/Noon/Evening
  let morning = (date.getHours() >= 5 && date.getHours() < 12);
  let afternoon = (date.getHours() >= 12 && date.getHours() < 18);
  let evening = (date.getHours() >= 18 || date.getHours() < 6);

  // This functions changes the background image depending on the time of day
  function timeOfDay() {
    if (morning === true) {
      document.body.style.background = "url('img/morning1.jpg') no-repeat center center fixed"
    } else if (afternoon === true) {
      document.body.style.background = "url('img/day3.jpg') no-repeat center center fixed"
    } else if (evening === true) {
      document.body.style.background = "url('img/night1.jpg') no-repeat center center fixed"
    }
  }
  timeOfDay();
  document.querySelector("body").style.backgroundSize = "cover";
}

time();
setInterval(() => {
  time()}, 1000);
