const DIGITS = 4;
const MAX_DIGIT = 9;
const MAX_ATTEMPTS = 10;

let Secret = "";
let Guesses = 0;
let GameOver = false;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeSecret(len = DIGITS) {
    // alert ("Making secret");
    let arr = [];

    while (arr.length < len) {
        const digit = String(randInt(0, MAX_DIGIT));
        if (!arr.includes(digit)) {
            arr.push(digit);
        }
    }

    return arr.join("");

}

// Timer
let timerInterval = null;
let elapsedSeconds = 0;

function startTimer() {
    clearInterval(timerInterval);
    elapsedSeconds = 0;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        elapsedSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const el = document.getElementById("time_value");
    if (!el) return;

    const min = Math.floor(elapsedSeconds / 60).toString().padStart(2, "0");
    const sec = (elapsedSeconds % 60).toString().padStart(2, "0");

    el.textContent = `${min}:${sec}`;
}


function updateAttemptsLeft() {
    const counterEl = document.getElementById("counter");
    if (!counterEl) return;

    const left = MAX_ATTEMPTS - Guesses;
    counterEl.textContent = left;
}

Secret = makeSecret();
updateAttemptsLeft();
startTimer();