// menu.js
document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("menu-container");
  
    if (menuContainer) {
      fetch("menu.html")
        .then(response => response.text())
        .then(data => {
          menuContainer.innerHTML = data;
        })
        .catch(error => console.error("Error loading menu:", error));
    }
  });
  