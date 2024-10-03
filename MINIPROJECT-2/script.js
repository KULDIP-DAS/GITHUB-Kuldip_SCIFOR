// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        alert('Please fill out all fields.');
        return;
    }

    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
