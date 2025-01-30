// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Reset form
    this.reset();
});
    });
});

// Scroll reveal animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.review-card, .profile-container').forEach((el) => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenuButton = document.createElement('button');
mobileMenuButton.classList.add('mobile-menu');
mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.nav-container').appendChild(mobileMenuButton);

mobileMenuButton.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});