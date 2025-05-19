

export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    creationDate: string; // ISO date string, e.g. '2025-05-05'
    finished: boolean;
    technologies: string[];
  }