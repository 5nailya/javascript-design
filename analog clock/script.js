const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const modeButton = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('mode') || 'light';

const audio = new Audio('audio/alarm_clock_ticking_loop_002.mp3');
audio.loop = true;

if (currentMode === 'dark') {
  document.body.classList.add('dark-mode');
  modeButton.textContent = 'Switch to Light Mode';
}

function updateClock() {
  const time = new Date();

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;

  secondHand.style.transform = `rotate(${secondAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

document.querySelector('.clock').addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

modeButton.addEventListener('click', () => {
  const darkmode = document.body.classList.toggle('dark-mode');
  if (darkmode) {
    modeButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('mode', 'dark');
  } else {
    modeButton.textContent = 'Switch to Dark Mode';
    localStorage.setItem('mode', 'light');
  }
});

setInterval(updateClock, 1000);
updateClock();
