document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('#servicesLink');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownToggle.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    dropdownContent.classList.toggle('show'); // Toggle visibility
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove('show');
    }
  });

});