document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbarPlaceholder");

  if (navbarPlaceholder) {
    // For GitHub Pages, include the repository name in the path
    fetch("/components/navbar/navbar.html")
      .then(response => {
        if (!response.ok) {
          // Try a relative path as fallback
          return fetch("./components/navbar/navbar.html");
        }
        return response;
      })
      .then(response => {
        if (!response.ok) {
          // Try another relative path as a secondary fallback
          return fetch("../components/navbar/navbar.html");
        }
        return response;
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load navbar (status ${response.status})`);
        }
        return response.text();
      })
      .then(data => {
        navbarPlaceholder.innerHTML = data;
        
        // Dispatch a custom event to notify other scripts that the navbar is loaded
        document.dispatchEvent(new CustomEvent('navbarLoaded'));
      })
      .catch(error => {
        console.error("Error loading navbar:", error);
        navbarPlaceholder.innerHTML = `
          <div style="background-color: #1a202c; color: white; padding: 20px; text-align: center;">
            Error loading navbar. Check console for details.
          </div>
        `;
      });
  }
});

// Initialize mobile toggle functionality
document.addEventListener('navbarLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinksContainer');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});