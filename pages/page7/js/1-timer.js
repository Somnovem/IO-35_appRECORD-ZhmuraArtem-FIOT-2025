// DOM element references
const startButtonElement = document.querySelector("[data-start]");
const dateTimeSelector = document.querySelector("#datetime-picker");

const daysDisplayElement = document.querySelector("[data-days]");
const hoursDisplayElement = document.querySelector("[data-hours]");
const minutesDisplayElement = document.querySelector("[data-minutes]");
const secondsDisplayElement = document.querySelector("[data-seconds]");

let chosenDateTime = null;
let countdownInterval = null;

startButtonElement.disabled = true;

// Initialize flatpickr date/time picker
flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (!selectedDate) {
      startButtonElement.disabled = true;
      return;
    }

    if (selectedDate <= new Date()) {
      iziToast.error({
        title: "Помилка",
        message: "Please choose a date in the future",
        position: "topRight"
      });
      startButtonElement.disabled = true;
      return;
    }

    chosenDateTime = selectedDate;
    startButtonElement.disabled = false;
  }
});

startButtonElement.addEventListener("click", handleStartClick);

function handleStartClick() {
  if (!chosenDateTime) {
    return;
  }

  startButtonElement.disabled = true;
  dateTimeSelector.disabled = true;

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    const currentTime = Date.now();
    const timeDifference = chosenDateTime - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      updateDisplay(0);
      dateTimeSelector.disabled = false;
      return;
    }

    updateDisplay(timeDifference);
  }, 1000);
}

function updateDisplay(milliseconds) {
  const timeComponents = parseMilliseconds(milliseconds);

  daysDisplayElement.textContent = formatWithLeadingZero(timeComponents.days);
  hoursDisplayElement.textContent = formatWithLeadingZero(timeComponents.hours);
  minutesDisplayElement.textContent = formatWithLeadingZero(timeComponents.minutes);
  secondsDisplayElement.textContent = formatWithLeadingZero(timeComponents.seconds);
}

function formatWithLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function parseMilliseconds(ms) {
  const SECOND_MS = 1000;
  const MINUTE_MS = SECOND_MS * 60;
  const HOUR_MS = MINUTE_MS * 60;
  const DAY_MS = HOUR_MS * 24;

  const days = Math.floor(ms / DAY_MS);
  const hours = Math.floor((ms % DAY_MS) / HOUR_MS);
  const minutes = Math.floor(((ms % DAY_MS) % HOUR_MS) / MINUTE_MS);
  const seconds = Math.floor((((ms % DAY_MS) % HOUR_MS) % MINUTE_MS) / SECOND_MS);

  return { days, hours, minutes, seconds };
}
