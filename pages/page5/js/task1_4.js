// Завдання 1.4: Клас Client з приватними властивостями
class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(value) {
    this.#login = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }
}

// Приклад використання
const client = new Client("user123", "user@example.com");
console.log("Логін:", client.login);
console.log("Email:", client.email);

client.login = "newuser456";
client.email = "newuser@example.com";
console.log("Оновлений логін:", client.login);
console.log("Оновлений email:", client.email);

