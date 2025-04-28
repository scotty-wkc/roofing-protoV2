document.addEventListener('DOMContentLoaded', () => {
  // We need to wait for the navbar to be loaded before we can access its elements
  const initializeDropdown = () => {
    // Check if dropdown elements exist
    const dropdownToggle = document.querySelector('#servicesLink');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    if (!dropdownToggle || !dropdownContent) {
      // Elements not found yet, try again in a short while
      setTimeout(initializeDropdown, 100);
      return;
    }
    
    // Set up event listener for dropdown toggle
    dropdownToggle.addEventListener('click', (event) => {
      // Only prevent default if the dropdown content is toggled
      if (dropdownContent.classList.contains('show')) {
        event.preventDefault();
      }
      dropdownContent.classList.toggle('show');
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
      if (dropdownToggle && dropdownContent && 
          !dropdownToggle.contains(event.target) && 
          !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show');
      }
    });
  };
  
  // Start the initialization process
  initializeDropdown();
});