/**
 * Profile context utilities
 * Handles profile-based customization for the portfolio
 */

export type ProfileType = 'it-support' | 'software-developer';

export const DEFAULT_PROFILE: ProfileType = 'software-developer';

export const PROFILE_CONFIG = {
    'it-support': {
        name: 'IT Support Professional',
        color: 'blue',
        icon: 'wrench',
        description: 'System Administration & Technical Support',
        skills: [
            'Active Directory Management',
            'System Administration',
            'Network Troubleshooting',
            'Hardware Support',
            'Backup & Recovery'
        ]
    },
    'software-developer': {
        name: 'Software Developer',
        color: 'green',
        icon: 'code',
        description: 'Full-Stack & Mobile Development',
        skills: [
            'Frontend Development',
            'Backend Development',
            'Mobile Development',
            'Database Design',
            'System Architecture'
        ]
    }
};

/**
 * Get current profile from localStorage
 */
export function getCurrentProfile(): ProfileType {
    if (typeof window !== 'undefined') {
        return (localStorage.getItem('selectedProfile') as ProfileType) || DEFAULT_PROFILE;
    }
    return DEFAULT_PROFILE;
}

/**
 * Set profile preference
 */
export function setProfile(profile: ProfileType): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem('selectedProfile', profile);
    }
}

/**
 * Get profile configuration
 */
export function getProfileConfig(profile: ProfileType) {
    return PROFILE_CONFIG[profile];
}

/**
 * Check if profile is IT Support
 */
export function isITSupport(): boolean {
    return getCurrentProfile() === 'it-support';
}

/**
 * Check if profile is Software Developer
 */
export function isDeveloper(): boolean {
    return getCurrentProfile() === 'software-developer';
}
