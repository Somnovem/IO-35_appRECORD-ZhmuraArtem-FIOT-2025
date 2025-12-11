// Завдання 1.6: Перевірка правильності закриття дужок
function checkBrackets(str) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Приклади використання
console.log(checkBrackets("function test() { return [1, 2, 3]; }")); // true
console.log(checkBrackets("function fail( { ] }")); // false
console.log(checkBrackets("const arr = [1, 2, { x: 3 }];")); // true

