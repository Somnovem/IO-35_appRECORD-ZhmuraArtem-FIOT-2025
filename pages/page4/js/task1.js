// Завдання 1: Перевірка значення на додатність/від'ємність/нуль
const value = prompt("Введіть значення:");

console.log(`Введене значення: ${value}`);

if (value === null || value === "") {
  alert("Значення не введено");
} else {
  const numValue = Number(value);
  
  if (isNaN(numValue)) {
    alert("Введено не число");
  } else if (numValue > 0) {
    alert("Число додатнє");
  } else if (numValue < 0) {
    alert("Число від'ємне");
  } else {
    alert("Число дорівнює нулю");
  }
}

