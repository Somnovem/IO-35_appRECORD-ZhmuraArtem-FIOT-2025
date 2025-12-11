// Завдання 1.2: Фільтрація та сортування медикаментів
const medicines = {
  Агалгін: new Date("2022-05-01"),
  Ношпа: new Date("2025-07-02"),
  Альфахолін: new Date("2024-12-21"),
  Аспірин: new Date("2022-08-15"),
  Аспаркам: new Date("2024-04-18"),
};

// Отримуємо масив назв препаратів
const medicineNames = Object.keys(medicines);
console.log("Масив назв препаратів:", medicineNames);

// Прибираємо медикаменти з простроченим строком зберігання
const now = new Date();
const validMedicines = Object.entries(medicines)
  .filter(([name, expiryDate]) => expiryDate > now)
  .sort(([, date1], [, date2]) => date1 - date2)
  .map(([name]) => name);

console.log("Валідні медикаменти (відсортовані):", validMedicines);

