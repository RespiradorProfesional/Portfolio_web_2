import { Technology } from "./Technology";

export interface Course {
    id: number;
    title: string;
    duration: number; // Duration in months
    description: string;
    technologies: Technology[];
  }