document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle logic with accessibility
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            
            // Update aria-label for better screen reader feedback
            this.setAttribute('aria-label', isExpanded ? 'Open mobile menu' : 'Close mobile menu');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-label', 'Open mobile menu');
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.add('hidden');
                menuToggle.setAttribute('aria-label', 'Open mobile menu');
                menuToggle.focus();
            }
        });
    }

    // Project Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        // Get existing filter counter
        const filterCounter = document.querySelector('.filter-counter');
        
        // Create no results message if it doesn't exist
        let noResults = document.querySelector('.no-results');
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results hidden';
            noResults.innerHTML = `
                <h3>No projects found</h3>
                <p>Try selecting a different category or check back later for new projects.</p>
            `;
            
            // Insert no results message after project grid
            const projectGrid = document.querySelector('.projects-grid');
            if (projectGrid) {
                projectGrid.parentElement.appendChild(noResults);
            }
        }
        
        // Filter function
        function filterProjects(category) {
            let visibleCount = 0;
            
            projectCards.forEach((card, index) => {
                const cardCategory = card.getAttribute('data-category');
                const shouldShow = category === 'all' || cardCategory === category;
                
                if (shouldShow) {
                    card.classList.remove('filtered-out');
                    card.classList.add('filtered-in');
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'translateZ(0) scale(1)';
                    visibleCount++;
                    
                    // Add stagger animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateZ(0) scale(1)';
                    }, index * 100);
                } else {
                    card.classList.add('filtered-out');
                    card.classList.remove('filtered-in');
                    card.style.opacity = '0';
                    card.style.transform = 'translateZ(0) scale(0.8)';
                    
                    // Hide card after animation
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Update counter if it exists
            if (filterCounter) {
                filterCounter.textContent = `Showing ${visibleCount} project${visibleCount !== 1 ? 's' : ''}`;
            }
            
            // Update grid data attribute for centering
            const projectGrid = document.querySelector('.projects-grid');
            if (projectGrid) {
                projectGrid.setAttribute('data-items', visibleCount.toString());
            }
            
            // Show/hide no results message
            if (visibleCount === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        }
        
        // Add click event listeners to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter category
                const category = this.getAttribute('data-filter');
                
                // Filter projects
                filterProjects(category);
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
        
        // Initialize with "All" filter
        filterProjects('all');
    }

    // Fade-in-on-scroll (legacy)
    const fadeInScrolls = document.querySelectorAll('.fade-in-scroll');
    const legacyObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                legacyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    fadeInScrolls.forEach(el => legacyObserver.observe(el));

    // Fade-up observer (new dashboard design)
    const fadeUps = document.querySelectorAll('.fade-up');
    const fadeUpObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                fadeUpObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    fadeUps.forEach(el => fadeUpObserver.observe(el));

    // Stats counter
    document.querySelectorAll('[data-counter]').forEach(el => {
        const target = parseInt(el.dataset.counter);
        let current = 0;
        const step = Math.ceil(target / 25);
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current;
            if (current >= target) clearInterval(timer);
        }, 40);
    });
    
    // Project card hover — let CSS handle the lift, JS only manages z-index
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
        });
    });
    
    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Project card stagger animation
    const projectGrid = document.querySelector('.projects-grid');
    if (projectGrid) {
        const cards = projectGrid.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page jump
                history.pushState(null, null, this.getAttribute('href'));
                
                // Focus the target for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });
    
    // Add loading states for external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            // Add visual feedback for external links
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
    
    // Improve focus management for keyboard navigation
    const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    // Add focus ring styles for keyboard navigation
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('ring-2', 'ring-[var(--primary-color)]', 'ring-offset-2');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('ring-2', 'ring-[var(--primary-color)]', 'ring-offset-2');
        });
    });
});