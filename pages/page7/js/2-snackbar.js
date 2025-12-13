// Form element reference
const promiseFormElement = document.querySelector(".promise-form");

// Event listener
promiseFormElement.addEventListener("submit", handlePromiseFormSubmit);

function handlePromiseFormSubmit(event) {
  event.preventDefault();

  const delayInputField = promiseFormElement.elements.delay;
  const stateInputField = promiseFormElement.elements.state;

  const delayValue = Number(delayInputField.value);
  const promiseState = stateInputField.value; // "fulfilled" або "rejected"

  if (Number.isNaN(delayValue) || delayValue < 0) {
    iziToast.error({
      title: "Помилка",
      message: "Введіть коректну затримку (0 або більше мілісекунд)",
      position: "topRight"
    });
    return;
  }

  generateDelayedPromise(delayValue, promiseState)
    .then(ms => {
      iziToast.success({
        title: "✅ Success",
        message: `Fulfilled promise in ${ms}ms`,
        position: "topRight"
      });
    })
    .catch(ms => {
      iziToast.error({
        title: "❌ Error",
        message: `Rejected promise in ${ms}ms`,
        position: "topRight"
      });
    });
}

function generateDelayedPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
