// Select the login button
const loginButton = document.getElementById("login-button");

// Add an event listener to handle the button click
loginButton.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(username)
  if (username && password) {
    // Redirect to the main page
    window.location.href = "/pages/index.html";
  } else {
    alert("Please enter both username and password!");
  }
});
