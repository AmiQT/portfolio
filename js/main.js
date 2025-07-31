document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle logic
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Fade-in-on-scroll animation
    const fadeInScrolls = document.querySelectorAll('.fade-in-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInScrolls.forEach(fadeInScroll => {
        observer.observe(fadeInScroll);
    });
});