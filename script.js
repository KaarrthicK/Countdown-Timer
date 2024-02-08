let timerInterval;
let targetDate;
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateCountdown, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    targetDate = new Date().getTime();
    updateCountdown();
}

function restartTimer() {
    setCustomCountdown();
    startTimer();
}

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);

    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        document.querySelector('.timer').innerText = "Your Time Arrived!";
        document.querySelector('.counter').style.display = 'none';
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function setCustomCountdown() {
    const inputTimeInSeconds = parseInt(document.getElementById('countdownInput').value, 10);
    if (!isNaN(inputTimeInSeconds) && inputTimeInSeconds > 0) {
        targetDate = new Date().getTime() + inputTimeInSeconds * 1000;
        updateCountdown();
        stopTimer();
    } else {
        alert('Please enter a countdown time.');
    }
}
