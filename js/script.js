function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
}
document.getElementById('startJourney').addEventListener('click', function() {
    window.location.href = 'explore.html';  // Replace 'explore.html' with the actual URL of your explore page
});