import { Technology } from "./Technology";

export interface Course {
    id: number;
    title: string;
    description: string;
    company: string;
    duration: number; // Duration in months
    technologies: Technology[];
  }