// JavaScript for Feedback Page

// Star Rating System
const stars = document.querySelectorAll('.rating i');
let ratingValue = 0;

// Add click event to each star
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        ratingValue = index + 1;
        updateStars(ratingValue);
    });
});

// Update stars based on rating
function updateStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('rated');
        } else {
            star.classList.remove('rated');
        }
    });
}

// Character count for message
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');

messageInput.addEventListener('input', () => {
    charCount.textContent = `${messageInput.value.length}/200`;
});

// Form Submission
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message && ratingValue > 0) {
        alert(`Thank you for your feedback, ${name}! You've rated us ${ratingValue} stars.`);
        feedbackForm.reset();
        updateStars(0);
        charCount.textContent = "0/200";
        releaseFlowers();
    } else {
        alert('Please complete all fields and give a rating before submitting.');
    }
});

// Flower animation
function releaseFlowers() {
    const flowerContainer = document.getElementById('flowerContainer');
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = Math.random() * 3 + 3 + 's';
        flowerContainer.appendChild(flower);
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}
