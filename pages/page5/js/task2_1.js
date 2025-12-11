// Завдання 2.1: Об'єднання масивів values
const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const allValues = data.flatMap(item => item.values);
console.log("Об'єднаний масив:", allValues);

