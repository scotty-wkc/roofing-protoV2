  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Additional validation can go here

    // Show a success message
    alert('Thank you for your message! We will get back to you soon.');

    // this.submit();

    // Redirect to index.html
    window.location.href = './submission.html';
  });