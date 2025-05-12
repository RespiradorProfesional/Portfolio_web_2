import { Technology } from "./Technology";

export interface Course {
    id: number;
    title: string;
    description: string;
    duration: number; // Duration in months
    technologies: Technology[];
  }