// Завдання 9: Візуальний елемент «Підказка при уведенні»
// Створюємо список слів-підказок
const hints = [
  "JavaScript",
  "Java",
  "Python",
  "C++",
  "HTML",
  "CSS",
  "React",
  "Vue",
  "Angular",
  "Node.js"
];

// Функція для створення та ініціалізації автодоповнення
function initAutocomplete() {
  const input = document.getElementById('autocomplete-input');
  const suggestionsList = document.getElementById('suggestions-list');
  
  if (!input || !suggestionsList) {
    console.error("Елементи для автодоповнення не знайдено");
    return;
  }
  
  // Функція для фільтрації підказок
  function filterHints(value) {
    if (value.length === 0) {
      return [];
    }
    const lowerValue = value.toLowerCase();
    return hints.filter(hint => 
      hint.toLowerCase().startsWith(lowerValue)
    );
  }
  
  // Функція для відображення підказок
  function showSuggestions(filteredHints) {
    suggestionsList.innerHTML = '';
    
    if (filteredHints.length === 0) {
      suggestionsList.style.display = 'none';
      return;
    }
    
    suggestionsList.style.display = 'block';
    
    filteredHints.forEach(hint => {
      const li = document.createElement('li');
      li.textContent = hint;
      li.className = 'suggestion-item';
      
      li.addEventListener('click', () => {
        input.value = hint;
        suggestionsList.style.display = 'none';
      });
      
      suggestionsList.appendChild(li);
    });
  }
  
  // Обробник події введення тексту
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    const filteredHints = filterHints(value);
    showSuggestions(filteredHints);
  });
  
  // Приховуємо список при втраті фокусу
  input.addEventListener('blur', () => {
    setTimeout(() => {
      suggestionsList.style.display = 'none';
    }, 200);
  });
  
  // Показуємо список при отриманні фокусу, якщо є текст
  input.addEventListener('focus', () => {
    const value = input.value;
    if (value.length > 0) {
      const filteredHints = filterHints(value);
      showSuggestions(filteredHints);
    }
  });
}

// Ініціалізуємо автодоповнення після завантаження DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAutocomplete);
} else {
  initAutocomplete();
}

