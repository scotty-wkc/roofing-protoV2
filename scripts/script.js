document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('#servicesLink');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdownToggle.addEventListener('click', (event) => {
    // Only prevent default if the dropdown content is toggled
    if (dropdownContent.classList.contains('show')) {
      event.preventDefault();
    }
    dropdownContent.classList.toggle('show');
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove('show');
    }
  });
});