import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ExperienceLevel, Technology } from "@/src/types/Technology";
import TechnologyCard from "@/src/components/page_components/AboutPage/TechnologyCard";
import { fetchCourses, fetchTechnologies } from "@/src/services/api";
import LinkCard from "@/src/components/common/LinkCard";
import { Course } from "@/src/types/Course";
import ImageBackground from "@/src/components/common/ImageBackground";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  const technologies = await fetchTechnologies();
  const courses: Course[] = await fetchCourses();

  const experienceOrder: Record<ExperienceLevel, number> = {
    HIGH: 3,
    MEDIUM: 2,
    LOW: 1,
  };

  const technologiesGrouped = technologies.reduce<Record<string, Technology[]>>(
    (acc, tech) => {
      if (!acc[tech.classification]) {
        acc[tech.classification] = [];
      }
      acc[tech.classification].push(tech);
      return acc;
    },
    {}
  );

  return (
    <div className="relative flex flex-col items-center ">
      <div className="flex flex-col relative justify-center items-center w-full mt-40 pt-36 pb-28 z-10">
        <Image
          src="/personal_photos/personal_photo_example (2).jpeg"
          alt="Imagen de ejemplo"
          width={40}
          height={40}
          className="rounded-full w-40 h-40 absolute top-1"
        />
        <p className="max-w-3xl text-main-text bg-background-2 border-8 border-background-2 rounded-4xl p-4">
          {t("description")}
        </p>
        <p className="max-w-96 text-second-text bg-background-2 border-4 border-background-2 rounded-4xl p-4 absolute bottom-11">
          {t("description_2")}
        </p>
      </div>
      {/* Technologies section */}
      <div className="my-20 z-10">
        {Object.entries(technologiesGrouped).map(
          ([classification, techList]) => (
            <section key={classification} className="my-8 w-full max-w-4xl">
              <h2 className="text-2xl text-main-text font-bold text-center my-10">
                {classification}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techList
                  .sort((a, b) => {
                    return (
                      experienceOrder[b.experience] -
                      experienceOrder[a.experience]
                    );
                  })
                  .map((tech) => (
                    <TechnologyCard key={tech.id} technology={tech} />
                  ))}
              </div>
            </section>
          )
        )}
      </div>
      {/* Courses section */}

      <div className="bg-gradient-to-t from-background-2 to-transparent h-48 w-full" />
      <div className="flex flex-col justify-center items-center bg-background-2 w-full">
        <h2 className="text-3xl md:text-5xl my-10 text-main-text">
          {t("titles_courses")}
        </h2>
        {courses.map((course) => (
          <LinkCard
            key={course.id}
            title={course.title}
            technologies={course.technologies}
            link={`/course/${course.id}`}
          />
        ))}
      </div>
    </div>
  );
}
