document.querySelectorAll('.explore-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Exploration content coming soon!');
    });
});
function showCertificate(userName, topic) {
    document.getElementById('userName').textContent = userName;
    document.getElementById('quizTopic').textContent = topic;
    document.getElementById('certificateModal').style.display = 'flex';
}

// Call this function with the user’s name and quiz topic after they finish the quiz
// Example: showCertificate("John Doe", "Sun");
