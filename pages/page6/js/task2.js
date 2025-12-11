// Завдання 2: Приховування/розкриття тексту
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('task2-toggle-btn');
  const inputField = document.getElementById('task2-password-input');
  let isHidden = false; // Початковий стан: текст видимий (type='text' в HTML)

  if (toggleButton && inputField) {
      toggleButton.addEventListener('click', function() {
          if (isHidden) {
              // Розкриваємо текст
              inputField.type = 'text';
              toggleButton.textContent = 'Приховати';
              isHidden = false;
          } else {
              // Приховуємо текст
              inputField.type = 'password';
              toggleButton.textContent = 'Розкрити';
              isHidden = true;
          }
      });
  }
});