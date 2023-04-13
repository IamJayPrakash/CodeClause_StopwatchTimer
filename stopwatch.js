// Stopwatch
let mins = 0;
let secs = 0;
let tens = 0;
let interval;

const stopwatch = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.cir1 .btn-start');
const stopBtn = document.querySelector('.cir1 .btn-stop');
const resetBtn = document.querySelector('.cir1 .btn-reset');

function startStopwatch() {
  clearInterval(interval);
  interval = setInterval(() => {
    tens++;
    if (tens === 100) {
      secs++;
      tens = 0;
    }
    if (secs === 60) {
      mins++;
      secs = 0;
    }
    stopwatch.innerHTML = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${tens.toString().padStart(2, '0')}`;
  }, 10);
}

startBtn.addEventListener('click', () => {
  startStopwatch();
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  mins = 0;
  secs = 0;
  tens = 0;
  stopwatch.innerHTML = `00:00:00`;
});


// Timer
let timerMins = 0;
let timerSecs = 0;
let timerTens = 0;
let timerInterval;

const timer = document.querySelector('.timer');
const timerMinutes = document.querySelector('.timer-minutes');
const timerSeconds = document.querySelector('.timer-seconds');
const timerStartBtn = document.querySelector('.cir2 .btn-start');
const timerStopBtn = document.querySelector('.cir2 .btn-stop');
const timerResetBtn = document.querySelector('.cir2 .btn-reset');

function startTimer() {
  clearInterval(timerInterval);
  timerMins = parseInt(timerMinutes.value);
  timerSecs = parseInt(timerSeconds.value);
  timerInterval = setInterval(() => {
    timerTens--;
    if (timerTens < 0) {
      timerSecs--;
      timerTens = 99;
    }
    if (timerSecs < 0) {
      timerMins--;
      timerSecs = 59;
    }
    if (timerMins < 0) {
      clearInterval(timerInterval);
      timer.innerHTML = `00:00:00`;
      return;
    }
    timer.innerHTML = `${timerMins.toString().padStart(2, '0')}:${timerSecs.toString().padStart(2, '0')}:${timerTens.toString().padStart(2, '0')}`;
  }, 10);
}

timerStartBtn.addEventListener('click', () => {
  startTimer();
});

timerStopBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
});

timerResetBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerMinutes.value = '';
  timerSeconds.value = '';
  timer.innerHTML = `00:00:00`;
});

