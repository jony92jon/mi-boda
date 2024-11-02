const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

document.addEventListener("DOMContentLoaded", startTimer);

const marriedDate = new Date("31 May 2024");

let timerInterval;

function countdown() {
  const targetDate = new Date(marriedDate);
  const currentDate = new Date();

  if (currentDate > targetDate) {
    document.getElementById("reloj__titulo").innerHTML =
      "¡Ya estamos casados! 💍💍";
    clearInterval(timerInterval);
    return;
  }

  const totalSeconds = (targetDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function startTimer() {
  countdown();
  timerInterval = setInterval(countdown, 1000);
}
