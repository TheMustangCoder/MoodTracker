document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const successMessage = document.getElementById('success-message');
  
    // Handle registration form submission
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Mock saving user data (use backend in real apps)
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ username, email, password });
      localStorage.setItem('users', JSON.stringify(users));
  
      // Display success message
      successMessage.textContent = 'Registration successful! You can now log in.';
      
      // Clear the form
      registerForm.reset();
  
      // Redirect to login page after a delay
      setTimeout(() => {
        window.location.href = "loginpage.html";
      }, 10);
    });
  });
  