import TechnologiesIcons from "@/src/components/common/TechnologiesIcons";
import {
  fetchCourseById,
  fetchProjectById,
  fetchExperienceById,
} from "@/src/services/api";
import { Content } from "@/src/types/Content";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type Params = {
  params: {
    type: string;
    id: number;
  };
};

export default async function ContentPage({ params }: Params) {
  const t = await getTranslations("ContentPage");

  const { type, id } = params;

  let content: Content | null = null;

  switch (type) {
    case "about":
      const course = await fetchCourseById(id);
      content = {
        ...course,
        creationDate: null,
        link: null,
        finished: null,
      };
      break;

    case "projects":
      const project = await fetchProjectById(id);
      content = {
        ...project,
        duration: null,
      };
      break;

    case "experience":
      const experience = await fetchExperienceById(id);
      content = {
        ...experience,
        link: null,
        finished: null,
      };
      break;

    default:
      return notFound();
  }

  if (!content) return notFound();

  return (
    <div className="relative flex flex-col justify-center items-center w-full mt-40 pt-36 pb-28 z-10 gap-2">
      <h1 className="text-6xl font-bold text-main-text">{content.title}</h1>
      <TechnologiesIcons technologies_display={content.technologies} />

      <p className="text-center text-main-text max-w-xl mt-10">{content.description}</p>

      {/* link */}
      {content.link && (
        <a
          href={content.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {t("link")}
        </a>
      )}

      {/* duration */}
      {content.duration !== null && content.duration !== undefined && (
        <p className="text-sm text-second-text">
          {t("duration")}
          {content.duration}
          {" "}
          {content.duration === 1 ? t("month") : t("months")}
        </p>
      )}

      {/* company */}
      {content.company && (
        <p className="text-sm text-second-text">
          {t("company")}
          {content.company}
        </p>
      )}

      {/* creationDate */}
      {content.creationDate && (
        <p className="text-sm text-second-text">
          {t("creation_date")}
          {new Date(content.creationDate).toLocaleDateString()}
        </p>
      )}

      {/* finished */}
      {content.finished !== null && content.finished !== undefined && (
        <p className="text-sm text-second-text">
          {t("status")} 
          {content.finished ? t("finished") : t("in_progress")}
        </p>
      )}
    </div>
  );
}
