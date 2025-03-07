// Toggle Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close Mobile Menu When a Link is Clicked
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section

        if (targetSection) {
            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add a Loading Spinner (if needed)
window.addEventListener('load', () => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none'; // Hide the spinner after the page loads
    }
});