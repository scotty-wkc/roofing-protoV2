document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbarPlaceholder");

  if (navbarPlaceholder) {
    fetch("../components/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarPlaceholder.innerHTML = data;
      })
      .catch((error) => console.error("Error loading navbar:", error));
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinksContainer');
  
  navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });
  
  // Handle dropdown on mobile
  if (window.innerWidth < 992) {
    const servicesDropdown = document.getElementById('servicesDropdown');
    servicesDropdown.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        e.preventDefault();
      }
    });
  }
});