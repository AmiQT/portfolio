/**
 * Profile Types
 * Defines the structure for profile-related data
 */

export type ProfileType = 'it-support' | 'software-developer' | 'data-analyst';

export interface ProfileConfig {
  id: ProfileType;
  name: string;
  description: string;
  icon: string;
  primaryColor?: string;
  accentColor?: string;
  features?: string[];
  color?: string;
  skills?: string[];
}

export interface ProfileContextType {
  selectedProfile: ProfileType | null;
  setSelectedProfile: (profile: ProfileType) => void;
  getProfileConfig: (profile: ProfileType) => ProfileConfig;
}
