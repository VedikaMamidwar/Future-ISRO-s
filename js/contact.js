// script.js

// Form validation and submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Real-time input validation
    const validateInput = (input) => {
        if (input.value.trim() === '') {
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    };

    nameInput.addEventListener('input', () => validateInput(nameInput));
    emailInput.addEventListener('input', () => validateInput(emailInput));
    messageInput.addEventListener('input', () => validateInput(messageInput));

    // Form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Check for valid inputs
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Please fill in all fields correctly.');
            return;
        }

        // Simulate a form submission (you can implement actual submission here)
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset(); // Reset the form fields
        }, 500);
    });

    // Add focus effect to input fields
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
            input.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            input.classList.remove('focused');
        });
    });
});

// Simple interaction for the contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    alert('Your message has been sent!'); // Alert on form submission
});

