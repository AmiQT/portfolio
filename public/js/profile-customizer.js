/**
 * Profile Customization Script
 * This script customizes page content based on the selected profile
 * Runs on every page load to apply profile-specific styling and content
 */

(function() {
    const PROFILE_KEY = 'selectedProfile';
    const DEFAULT_PROFILE = 'software-developer';
    
    function getCurrentProfile() {
        try {
            return localStorage.getItem(PROFILE_KEY) || DEFAULT_PROFILE;
        } catch (e) {
            return DEFAULT_PROFILE;
        }
    }

    function applyProfileCustomization() {
        const profile = getCurrentProfile();
        
        // Add profile attribute to body for CSS customization
        document.documentElement.setAttribute('data-profile', profile);
        document.body.setAttribute('data-profile', profile);
        
        // Apply profile-specific customizations
        if (profile === 'it-support') {
            applyITSupportTheme();
        } else if (profile === 'software-developer') {
            applyDeveloperTheme();
        }
        
        // Create and attach profile toggle button
        createProfileToggleButton(profile);
    }

    function applyITSupportTheme() {
        // IT Support specific customizations
        document.documentElement.style.setProperty('--profile-primary', '#3b82f6'); // blue
        document.documentElement.style.setProperty('--profile-secondary', '#60a5fa'); // light blue
    }

    function applyDeveloperTheme() {
        // Developer specific customizations
        document.documentElement.style.setProperty('--profile-primary', '#22c55e'); // green
        document.documentElement.style.setProperty('--profile-secondary', '#4ade80'); // light green
    }
    
    function createProfileToggleButton(profile) {
        // Check if button already exists
        if (document.getElementById('profile-toggle-btn')) return;
        
        const profileNames = {
            'it-support': 'IT Support Professional',
            'software-developer': 'Software Developer'
        };
        
        // Create button element
        const button = document.createElement('button');
        button.id = 'profile-toggle-btn';
        button.setAttribute('aria-label', 'Change profile');
        button.setAttribute('title', `Current: ${profileNames[profile]}\nClick to change profile`);
        button.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        `;
        
        // Add click handler to show profile selector modal
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = document.getElementById('profile-modal');
            if (modal) {
                modal.style.display = 'flex';
                // Trigger fade-in animation
                requestAnimationFrame(() => {
                    modal.style.opacity = '1';
                });
            }
        });
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #profile-toggle-btn {
                position: fixed;
                bottom: 20px;
                left: 20px;
                z-index: 40;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                background-color: var(--profile-primary, #22c55e);
                color: white;
                border: 2px solid white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transition: all 0.3s ease;
                opacity: 0;
                animation: fadeInProfileBtn 0.5s ease 0.2s forwards;
                padding: 0;
                font-size: 0;
                line-height: 0;
            }
            
            #profile-toggle-btn:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
            }
            
            #profile-toggle-btn:active {
                transform: scale(0.95);
            }
            
            #profile-toggle-btn svg {
                width: 20px;
                height: 20px;
            }
            
            @keyframes fadeInProfileBtn {
                from {
                    opacity: 0;
                    transform: scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            @media (max-width: 768px) {
                #profile-toggle-btn {
                    width: 40px;
                    height: 40px;
                    bottom: 16px;
                    left: 16px;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Append button to body
        if (document.body) {
            document.body.appendChild(button);
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyProfileCustomization);
    } else {
        applyProfileCustomization();
    }

    // Make available globally
    window.profileCustomizer = {
        getCurrentProfile,
        applyProfileCustomization
    };
})();
