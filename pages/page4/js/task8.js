// Завдання 8: Робота з двовимірним масивом додатніх і від'ємних чисел
function generateRandomArray(rows, cols) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      // Генеруємо числа від -50 до 50
      arr[i][j] = Math.floor(Math.random() * 101) - 50;
    }
  }
  return arr;
}

const twoDimArray = generateRandomArray(3, 4);
console.log("Двовимірний масив:", twoDimArray);

// Створюємо масив додатніх чисел
const positiveArray = [];
// Створюємо масив від'ємних чисел
const negativeArray = [];

for (let i = 0; i < twoDimArray.length; i++) {
  for (let j = 0; j < twoDimArray[i].length; j++) {
    if (twoDimArray[i][j] > 0) {
      positiveArray.push(twoDimArray[i][j]);
    } else if (twoDimArray[i][j] < 0) {
      negativeArray.push(twoDimArray[i][j]);
    }
  }
}

console.log("Масив додатніх чисел:", positiveArray);
console.log("Масив від'ємних чисел:", negativeArray);

// Замінюємо третій елемент у додатньому масиві
if (positiveArray.length >= 3) {
  const replacementValue = prompt("Введіть від'ємне значення для заміни третього елемента:");
  if (replacementValue !== null && replacementValue !== "") {
    const numValue = Number(replacementValue);
    if (!isNaN(numValue) && numValue < 0) {
      positiveArray[2] = numValue;
      console.log("Оновлений масив додатніх чисел:", positiveArray);
    } else {
      console.log("Введено некоректне значення (має бути від'ємним числом)");
    }
  }
} else {
  console.log("У масиві додатніх чисел менше 3 елементів");
}

