import { Technology } from "./Technology";

export interface Experience {
    id: number;
    title: string;
    duration: number; // Duration in months
    description: string;
    technologies: Technology[];
    creationDate: string; // ISO date string, e.g. '2025-05-05'
  }