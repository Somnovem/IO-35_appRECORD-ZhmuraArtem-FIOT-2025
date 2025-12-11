// Завдання 6: Зміна кольору фону body
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const changeColorButton = document.querySelector('#task6-change-color');
  const colorSpan = document.querySelector('#task6-color-span');
  
  if (changeColorButton && colorSpan) {
      changeColorButton.addEventListener('click', function() {
          const randomColor = getRandomHexColor();
          document.body.style.backgroundColor = randomColor;
          colorSpan.textContent = randomColor;
      });
  }
});