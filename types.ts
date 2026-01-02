
export interface Project {
  id: string;
  name: string;
  period: string;
  description: string;
  approach: string[];
  tech: string[];
  metrics: string[];
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  type: 'work' | 'internship' | 'education' | 'achievement' | 'project';
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CodingStat {
  platform: string;
  rank: string;
  detail: string;
  icon?: string;
}
