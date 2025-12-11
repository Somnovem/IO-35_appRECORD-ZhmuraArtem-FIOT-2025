// Завдання 5: Управління формою логіна
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('task5-login-form');
  
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const email = loginForm.elements.email.value.trim();
          const password = loginForm.elements.password.value.trim();
          
          if (!email || !password) {
              alert('All form fields must be filled in');
              return;
          }
          
          const userData = {
              email: email,
              password: password
          };
          
          console.log('User data:', userData);
          loginForm.reset();
      });
  }
});