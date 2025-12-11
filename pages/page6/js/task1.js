// Завдання 1: Виведення значення з поля введення у консоль
document.addEventListener('DOMContentLoaded', function() {
  const showButton = document.getElementById('task1-show-btn');
  const inputField = document.getElementById('task1-input-field');

  if (showButton && inputField) {
      showButton.addEventListener('click', function() {
          const value = inputField.value;
          console.log('Введене значення:', value);
      });
  }
});