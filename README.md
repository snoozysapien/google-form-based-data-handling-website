# google-form-based-data-handling-website

index.html: This file builds the website structure.
It includes a form with name and email fields.
A success message container is added (initially hidden).
Links to the CSS and JavaScript files are included.
style.css: This file styles the website for a clean layout.
script.js: This file handles form submission and validation.
It listens for the submit event on the form.
(Optional) It includes basic client-side validation to ensure required fields are filled.
It prevents the default form submission behavior (which wouldn't work for Google Forms).
After validation (or directly if no validation is needed), it displays a success message after a short delay.
