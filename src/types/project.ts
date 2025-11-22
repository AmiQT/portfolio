/**
 * Project Types
 * Defines the structure for project data
 */

export type ProjectCategory = 'web-dev' | 'app-dev' | 'analytics';
export type ProjectStatus = 'completed' | 'coming-soon' | 'in-progress';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
  status: ProjectStatus;
  profile: 'it-support' | 'software-developer' | 'data-analyst';
}

export interface ProjectShowcase {
  projects: Project[];
  profile: 'it-support' | 'software-developer' | 'data-analyst';
}
