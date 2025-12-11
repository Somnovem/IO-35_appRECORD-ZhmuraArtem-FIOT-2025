// Завдання 2: Визначення пори року через switch-case
const number = prompt("Введіть число (1, 2, 3 або 4):");
let result;

switch (number) {
  case '1':
    result = 'зима';
    break;
  case '2':
    result = 'весна';
    break;
  case '3':
    result = 'літо';
    break;
  case '4':
    result = 'осінь';
    break;
  default:
    result = 'невідома пора року';
}

console.log(`Результат: ${result}`);

