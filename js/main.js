document.addEventListener('DOMContentLoaded', () => {
    // Fetch and inject the header, then attach event listeners
    fetch('partials/_header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;

            // Mobile menu toggle logic, placed here to ensure elements exist
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        })
        .catch(error => {
            console.error('Error fetching header:', error);
            // As a fallback, you could insert a simple message or default header here
            document.querySelector('header').innerHTML = '<p class="text-center text-red-500">Could not load navigation.</p>';
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