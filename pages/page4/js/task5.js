// Завдання 5: Функція checkForSpam для перевірки заборонених слів
function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();
  return lowerMessage.includes('spam') || lowerMessage.includes('sale');
}

// Приклади використання
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best SALE offers now")); // true
console.log(checkForSpam("Amazing SalE, only today!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

