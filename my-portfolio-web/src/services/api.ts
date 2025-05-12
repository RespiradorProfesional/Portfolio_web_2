import { Technology } from "@/src/types/Technology";
import { Course } from "../types/Course";
import { Project } from "../types/Project";
import { Experience } from "../types/Experience";
import { getLanguageCode } from "../utils/languageStore";


export async function fetchTechnologies(): Promise<Technology[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/technologies?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }
  return res.json();
}


export async function fetchCourses(): Promise<Course[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses?lang=${getLanguageCode()}`);
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/courses?lang=${getLanguageCode()}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch courses ${process.env.NEXT_PUBLIC_API_URL}/courses?lang=${getLanguageCode()}`);
  }
  return res.json();
}

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export async function fetchExperiences(): Promise<Experience[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experiences?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch experiences");
  }
  return res.json();
}
