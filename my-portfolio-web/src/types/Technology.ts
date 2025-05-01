export type ExperienceLevel = "HIGH" | "MEDIUM" | "LOW";

export interface Technology {
    id: number;
    name: string;
    experience: ExperienceLevel;
    classification: string;
  }