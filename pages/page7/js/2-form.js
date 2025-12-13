// LocalStorage key for form state
const FORM_STATE_KEY = "feedback-form-state";

// Form element reference
const feedbackFormElement = document.querySelector(".feedback-form");

// Form data object
const formState = {
  email: "",
  message: ""
};

// Event listeners
feedbackFormElement.addEventListener("input", handleFormInput);
feedbackFormElement.addEventListener("submit", handleFormSubmit);

// Restore form state on page load
loadFormState();

function handleFormInput(event) {
  const { name, value } = event.target;

  if (!(name in formState)) {
    return;
  }

  formState[name] = value.trim();

  persistFormState();
}

function handleFormSubmit(event) {
  event.preventDefault();

  if (formState.email === "" || formState.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log("Form data:", formState);

  localStorage.removeItem(FORM_STATE_KEY);

  formState.email = "";
  formState.message = "";
  feedbackFormElement.reset();
}

function persistFormState() {
  try {
    const serializedData = JSON.stringify(formState);
    localStorage.setItem(FORM_STATE_KEY, serializedData);
  } catch (error) {
    console.warn("Помилка збереження в localStorage:", error);
  }
}

function loadFormState() {
  try {
    const savedData = localStorage.getItem(FORM_STATE_KEY);
    if (!savedData) {
      return;
    }

    const parsedData = JSON.parse(savedData);

    if (typeof parsedData.email === "string") {
      formState.email = parsedData.email;
      feedbackFormElement.elements.email.value = parsedData.email;
    }

    if (typeof parsedData.message === "string") {
      formState.message = parsedData.message;
      feedbackFormElement.elements.message.value = parsedData.message;
    }
  } catch (error) {
    console.warn("Помилка читання з localStorage:", error);
  }
}
