// Завдання 4: Підрахунок категорій та елементів
document.addEventListener('DOMContentLoaded', function() {
  const categoriesList = document.getElementById('task4-categories'); 
  
  if (categoriesList) {
      const categories = categoriesList.querySelectorAll('li.item');
      const numberOfCategories = categories.length;
      
      console.log('Number of categories:', numberOfCategories);
      
      categories.forEach(category => {
          const title = category.querySelector('h2').textContent;
          const items = category.querySelector('ul').querySelectorAll('li');
          const numberOfItems = items.length;
          
          console.log('Category:', title);
          console.log('Elements:', numberOfItems);
      });
  }
});