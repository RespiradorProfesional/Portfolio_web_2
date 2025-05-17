import { Technology } from "@/src/types/Technology";
import { Course } from "../types/Course";
import { Project } from "../types/Project";
import { Experience } from "../types/Experience";
import { getLanguageCode } from "../utils/languageStore";

// TECHNOLOGIES
export async function fetchTechnologies(): Promise<Technology[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/technologies?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }
  return res.json();
}

// COURSES
export async function fetchCourses(): Promise<Course[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch courses`);
  }
  return res.json();
}

export async function fetchCourseById(id: number): Promise<Course> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/${id}?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch course with id ${id}`);
  }
  return res.json();
}

// PROJECTS
export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }
  return res.json();
}

export async function fetchProjectById(id: number): Promise<Project> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch project with id ${id}`);
  }
  return res.json();
}

// EXPERIENCES
export async function fetchExperiences(): Promise<Experience[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experiences?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error("Failed to fetch experiences");
  }
  return res.json();
}

export async function fetchExperienceById(id: number): Promise<Experience> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experiences/${id}?lang=${getLanguageCode()}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch experience with id ${id}`);
  }
  return res.json();
}