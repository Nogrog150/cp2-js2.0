let seconds = 0;
let minutes = 0;

const displayMinutes = document.querySelector("#minutes");
const displaySeconds = document.querySelector("#seconds");
const body = document.querySelector("body");

function updatingDisplay() {
  displayMinutes.innerHTML = String(minutes).padStart(2, "0");
  displaySeconds.innerHTML = String(seconds).padStart(2, "0");
}

function startTimer() {
  seconds = 0;
  minutes = 0;
  updatingDisplay();
  return setInterval(() => {
    if (minutes < 3) {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        return minutes;
      }
    } else {
      // Essa função já existe no js por isso nao foi declarada
      clearInterval(intervalId);
      seconds = 0;
      minutes = 0;
      updatingDisplay();
      alert("Interaja com o site");
      // Reiniciar o timer
      intervalId = startTimer()
      return;
    }

    updatingDisplay();
  }, 1000);
}
let intervalId = startTimer();

body.addEventListener('click', () => {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  updatingDisplay();
  intervalId = startTimer();
});