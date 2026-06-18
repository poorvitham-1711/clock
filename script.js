function updateClock() {
  let now = new Date();

  // Get hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format with leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display time
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

// Update every second
setInterval(updateClock, 1000);

// Initialize immediately
updateClock();
