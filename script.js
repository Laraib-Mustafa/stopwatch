let display = document.getElementById("display");

let startBtn = document.getElementById("startBtn");

let pauseBtn = document.getElementById("pauseBtn");

let resetBtn = document.getElementById("resetBtn");


let seconds = 0;

let minutes = 0;

let hours = 0;


let timer;

let isRunning = false;


startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);


function startTimer() {

    if (isRunning) {
        return;
    }

    timer = setInterval(updateTimer, 1000);

    isRunning = true;
}


function pauseTimer() {

    clearInterval(timer);

    isRunning = false;
}


function resetTimer() {

    clearInterval(timer);

    seconds = 0;

    minutes = 0;

    hours = 0;

    isRunning = false;

    display.innerText = "00:00:00";
}


function updateTimer() {

    seconds++;

    if (seconds === 60) {

        seconds = 0;

        minutes++;

    }

    if (minutes === 60) {

        minutes = 0;

        hours++;

    }

    display.innerText =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}