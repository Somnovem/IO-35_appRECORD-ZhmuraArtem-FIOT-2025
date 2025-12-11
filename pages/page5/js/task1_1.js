// Завдання 1.1: createProduct з коллбеками
function createProduct(obj, callback) {
  // Генеруємо унікальний ідентифікатор
  const uniqueId = Date.now() + Math.random();
  const product = {
    ...obj,
    id: uniqueId
  };
  callback(product);
  return product;
}

// logProduct - колббек що приймає об'єкт продукту і логуючий його в консоль
function logProduct(product) {
  console.log("Продукт:", product);
}

// logTotalPrice - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
function logTotalPrice(product) {
  console.log("Загальна вартість товару:", product.price);
}

// Приклади використання
const newProduct = { name: "Ноутбук", price: 25000 };
createProduct(newProduct, logProduct);
createProduct(newProduct, logTotalPrice);

