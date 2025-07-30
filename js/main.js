document.addEventListener('DOMContentLoaded', () => {
    // Fetch and inject the header
    fetch('partials/_header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            // Re-attach event listener for mobile menu toggle after header is loaded
            document.getElementById('menu-toggle').addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.toggle('hidden');
            });
        });

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
