// Завдання 3: Перевірка логіну та пароля для Admin та User
const adminPassword = "admin123";
const userPassword = "user123";

const login = prompt("Введіть логін:");

console.log(`Введений логін: ${login}`);

if (login === null || login.trim() === "") {
  alert("Cancelled");
} else {
  const trimmedLogin = login.trim();
  
  if (trimmedLogin === "Admin") {
    const password = prompt("Введіть пароль:");
    if (password === adminPassword) {
      alert("Hello, Admin");
    } else {
      alert("Невірний пароль");
    }
  } else if (trimmedLogin === "User") {
    const password = prompt("Введіть пароль:");
    if (password === userPassword) {
      alert("Hello, User");
    } else {
      alert("Невірний пароль");
    }
  } else {
    alert("I don't know you");
  }
}

