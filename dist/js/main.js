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

    // Fade-in-on-scroll animation with Intersection Observer
    const fadeInScrolls = document.querySelectorAll('.fade-in-scroll');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeInScrolls.forEach(fadeInScroll => {
        observer.observe(fadeInScroll);
    });
    
    // Enhanced Project Card Interactions
    projectCards.forEach(card => {
        // Add hover sound effect (optional - just for fun)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.zIndex = '1';
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') return; // Don't add ripple to links
            
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - this.offsetLeft) + 'px';
            ripple.style.top = (e.clientY - this.offsetTop) + 'px';
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
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