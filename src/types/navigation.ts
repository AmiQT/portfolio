/**
 * Navigation Types
 * Defines the structure for navigation-related data
 */

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface Navigation {
  links: NavLink[];
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email';
  url: string;
  label: string;
}
