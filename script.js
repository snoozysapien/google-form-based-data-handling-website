const form = document.getElementById('myForm');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Client-side validation (optional)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name === '' || email === '') {
    alert('Please fill out all required fields.');
    return;
  }

  // Submit the form to Google Forms (no data handling here)
  form.submit();

  // Display success message after a short delay
  setTimeout(() => {
    successMessage.style.display = 'block';
  }, 1000);
});