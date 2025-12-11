// Завдання 1.3: Знижка на фрукти та додавання id
const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

function applyDiscountAndAddId(fruitsArray) {
  return fruitsArray.map((fruit, index) => ({
    id: index + 1,
    name: fruit.name,
    price: fruit.price * 0.8 // Знижка 20%
  }));
}

const updatedFruits = applyDiscountAndAddId(fruits);
console.log("Оновлені фрукти:", updatedFruits);

