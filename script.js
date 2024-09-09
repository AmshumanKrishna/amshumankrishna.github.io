// Simple form submission alert
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been sent.');
  form.reset(); // Clear the form
});
