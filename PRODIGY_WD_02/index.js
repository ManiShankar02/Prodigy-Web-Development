const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime;
let intervalId;

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor(currentTime / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);

    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener("click", function() {
    if (!startTime) {
        startTime = Date.now();
        intervalId = setInterval(updateDisplay, 10);
    }
});

stopButton.addEventListener("click", function() {
    if (startTime) {
        clearInterval(intervalId);
        startTime = null;
    }
});

resetButton.addEventListener("click", function() {
    clearInterval(intervalId);
    startTime = null;
    display.textContent = "00:00:00";
});
