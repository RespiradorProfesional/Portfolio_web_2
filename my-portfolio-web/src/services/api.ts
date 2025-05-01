import { Technology } from "@/src/types/Technology";
import { Course } from "../types/Course";


export async function fetchTechnologies(): Promise<Technology[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/technologies`);
  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }
  return res.json();
}


export async function fetchCourses(): Promise<Course[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  return res.json();
}