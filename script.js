const minutesInput = document.getElementById('minutes');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const countdownDisplay = document.getElementById('countdown');

let countdownInterval;

startButton.addEventListener('click', () => {
    let minutes = parseInt(minutesInput.value);

    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number");
        return;
    }

    let timeLeft = minutes * 60;
    clearInterval(countdownInterval);

    // Display immediately
    countdownDisplay.textContent = `${minutes.toString().padStart(2,'0')}:00`;

    countdownInterval = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        countdownDisplay.textContent = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = "time up's";
        }
    }, 1000);
});

resetButton.addEventListener('click', () => {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = "00:00";
    minutesInput.value = "";
});
