document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
  
    // Mock user credentials
    const mockUser = {
      username: 'user123',
      password: 'password123'
    };
  
    // Handle login form submission
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Validate credentials
      if (username === mockUser.username && password === mockUser.password) {
        // Store authentication status in localStorage
        localStorage.setItem('isAuthenticated', 'true');
  
        // Redirect to the protected page
        window.location.href = "index.html";
      } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
      }
    });
  });
  
  