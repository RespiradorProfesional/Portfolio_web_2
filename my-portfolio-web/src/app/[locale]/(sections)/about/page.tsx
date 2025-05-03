import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ExperienceLevel, Technology } from "@/src/types/Technology";
import TechnologyCard from "@/src/components/page_components/AboutPage/TechnologyCard";
import { fetchCourses, fetchTechnologies } from "@/src/services/api";
import LinkCard from "@/src/components/common/LinkCard";
import { Course } from "@/src/types/Course";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const tc = await getTranslations("Common");

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
    <div className="flex flex-col justify-center items-center bg-[url('/background_images/background_ball.png')] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="">
        <Image
          src="/personal_photos/personal_photo_example (2).jpeg"
          alt="Imagen de ejemplo"
          width={2000}
          height={600}
          className="rounded-full w-40 h-40"
        />
        <p className="max-w-3xl text-main-text bg-background-2 border-4 border-background-2 rounded-lg p-4">
          {t("description")}
        </p>
        <p className="max-w-96 text-second-text bg-background-2 border-4 border-background-2 rounded-lg p-4">
          {t("description_2")}
        </p>
      </div>
      {/* Technologies section */}
      <div>
        {Object.entries(technologiesGrouped).map(
          ([classification, techList]) => (
            <section key={classification} className="my-8 w-full max-w-4xl">
              <h2 className="text-2xl font-bold text-center mb-4">
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
      <div className="bg-background-2">
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
