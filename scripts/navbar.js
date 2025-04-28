document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbarPlaceholder");

  if (navbarPlaceholder) {
    fetch("/components/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarPlaceholder.innerHTML = data;
        
        // Initialize navbar toggle functionality after loading
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinksContainer');
        
        if (navToggle && navLinks) {
          navToggle.addEventListener('click', () => {
              navLinks.classList.toggle('active');
          });
        }
        
        // Handle dropdown on mobile
        if (window.innerWidth < 992) {
          const servicesDropdown = document.getElementById('servicesDropdown');
          if (servicesDropdown) {
            servicesDropdown.addEventListener('click', function(e) {
              if (window.innerWidth < 992) {
                const dropdownContent = this.querySelector('.dropdown-content');
                if (dropdownContent) {
                  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
                  e.preventDefault();
                }
              }
            });
          }
        }
      })
      .catch((error) => {
        console.error("Error loading navbar:", error);
        // Show error to help debugging
        navbarPlaceholder.innerHTML = "Error loading navbar. Check console for details.";
      });
  }
});