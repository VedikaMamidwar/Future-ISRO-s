// Add interactivity when clicking 'Learn More' buttons
const buttons = document.querySelectorAll('.learn-more');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('This event is coming soon! Stay tuned for updates.');
        // Optionally redirect to a detailed event page
        // window.location.href = 'event-details.html';
    });
});

document.getElementById('backToHome').addEventListener('click', function() {
    window.location.href = 'index.html';  // Replace with the correct URL of your homepage
});