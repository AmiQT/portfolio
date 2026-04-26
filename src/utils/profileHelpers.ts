/**
 * Profile utilities - Client-side helpers
 * Functions for managing profile state and navigation
 */

import type { ProfileType } from '../types/profile';

/**
 * Get current profile from localStorage
 * @returns The current profile or default 'software-developer'
 */
export function getCurrentProfile(): ProfileType {
  if (typeof window === 'undefined') {
    return 'software-developer';
  }
  const profile = localStorage.getItem('selectedProfile') as ProfileType | null;
  return profile || 'software-developer';
}

/**
 * Save profile selection to localStorage
 * @param profile - The profile type to save
 */
export function saveProfile(profile: ProfileType): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('selectedProfile', profile);
}

/**
 * Get the projects page URL for a given profile
 * @param profile - The profile type
 * @param baseUrl - The base URL (default: /)
 * @returns The full projects page URL
 */
export function getProjectsUrl(profile: ProfileType, baseUrl: string = '/'): string {
  const profileMap: Record<string, string> = {
    'it-support': `${baseUrl}role-it-support/projects`,
    'software-developer': `${baseUrl}role-software-developer/projects`,
    'data-analyst': `${baseUrl}role-data-analyst/projects`,
    'devops-engineer': `${baseUrl}role-devops-engineer/projects`,
  };
  return profileMap[profile as string];
}

/**
 * Get the home page URL for a given profile
 * @param profile - The profile type
 * @param baseUrl - The base URL (default: /)
 * @returns The full home page URL
 */
export function getHomeUrl(profile: ProfileType, baseUrl: string = '/'): string {
  const profileMap: Record<string, string> = {
    'it-support': `${baseUrl}`,
    'software-developer': `${baseUrl}role-software-developer/`,
    'data-analyst': `${baseUrl}role-data-analyst/`,
    'devops-engineer': `${baseUrl}role-devops-engineer/`,
  };
  return profileMap[profile as string];
}

/**
 * Check if a profile is valid
 * @param profile - The profile to validate
 * @returns true if profile is valid
 */
export function isValidProfile(profile: unknown): profile is ProfileType {
  return ['it-support', 'software-developer', 'data-analyst', 'devops-engineer'].includes(profile as string);
}
