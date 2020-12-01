// DOM Elements
const clock = document.getElementById('clock');
const name = document.getElementById('name');
const greeting = document.getElementById('greeting');

// This functions grabs the current time 
function time() {
  let date = new Date();
  let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  let am_pm = date.getHours() >= 12 ? "PM" : "AM"
  if (hours === 0) {
    hours = 12;
  }
  if (window.innerWidth <= 800) {
    clock.textContent = `${hours}:${minutes}`;
  } else {
    clock.textContent = `${hours}:${minutes}:${seconds}${am_pm}`;
  }
}

// This function changes the background and greeting depending on the time of day
function backgroundGreeting() {
  let today = new Date();
  hour = today.getHours();

  if (hour >= 5 && hour < 12) {
    // Morning
    document.body.style.background = "url('img/morning1.jpg') no-repeat center center fixed"
    greeting.textContent = "Good Morning,";
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    document.body.style.background = "url('img/day3.jpg') no-repeat center center fixed"
    greeting.textContent = "Good Afternoon,";
  } else {
    // Evening
    document.body.style.background = "url('img/night1.jpg') no-repeat center center fixed"
    greeting.textContent = "Good Evening,"
  }
  document.querySelector("body").style.backgroundSize = "cover";
}
// This function creates a placeholder value within the name ID if the user has not entered their name.
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// This function is called when the Enter key is pressed within the name span.
// When enter is pressed the value within the name span is saved locally.
function setName(event) {
  if (event.type === 'keypress') {
    if (event.key === 'Enter') {
      localStorage.setItem('name', event.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', event.target.innerText);
  }
}

// Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

// Function Runs
getName();
backgroundGreeting();
time();
setInterval(() => {
  time()}, 1000);
