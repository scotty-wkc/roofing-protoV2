document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbarPlaceholder");

  if (navbarPlaceholder) {
    fetch("/roofing-protoV2/components/navbar.html")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load navbar (status ${response.status})`);
        }
        return response.text();
      })
      .then(data => {
        navbarPlaceholder.innerHTML = data;
        
        // Initialize navbar toggle functionality
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