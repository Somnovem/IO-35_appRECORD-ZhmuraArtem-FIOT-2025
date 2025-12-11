// Завдання 2.4: Клас Calculator з ланцюжковими викликами
class Calculator {
  constructor() {
    this._value = 0;
  }

  number(value) {
    this._value = Number(value);
    return this;
  }

  getResult() {
    return this._value;
  }

  add(value) {
    this._value += Number(value);
    return this;
  }

  subtract(value) {
    this._value -= Number(value);
    return this;
  }

  multiply(value) {
    this._value *= Number(value);
    return this;
  }

  divide(value) {
    const num = Number(value);
    if (num === 0) {
      throw new Error("Ділення на 0 неможливе");
    }
    this._value /= num;
    return this;
  }
}

// Приклад використання
const calc = new Calculator();
const result = calc
  .number(10)
  .add(5)
  .subtract(3)
  .multiply(4)
  .divide(2)
  .getResult();

console.log("Результат обчислень:", result);

