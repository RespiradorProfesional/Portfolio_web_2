import TechnologiesIcons from "@/src/components/common/TechnologiesIcons";
import {
  fetchCourseById,
  fetchProjectById,
  fetchExperienceById,
} from "@/src/services/api";
import { Content } from "@/src/types/Content";
import { notFound } from "next/navigation";

type Params = {
  params: {
    type: string;
    id: number;
  };
};


export default async function ContentPage({ params }: Params) {
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
  <div className="relative flex flex-col items-center">
    <div className="flex flex-col relative justify-center items-center w-full mt-40 pt-36 pb-28 z-10 gap-2">
      <h1 className="text-2xl font-bold">{content.title}</h1>

      <TechnologiesIcons technologies_display={content.technologies} />

      <p className="text-center max-w-xl">{content.description}</p>

      {/* creationDate */}
      {content.creationDate && (
        <p className="text-sm text-gray-500">
          Fecha de creación: {new Date(content.creationDate).toLocaleDateString()}
        </p>
      )}

      {/* link */}
      {content.link && (
        <a
          href={content.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Ver enlace relacionado
        </a>
      )}

      {/* duration */}
      {content.duration !== null && content.duration !== undefined && (
        <p className="text-sm text-gray-700">
          Duración: {content.duration} {content.duration === 1 ? "mes" : "meses"}
        </p>
      )}

      {/* company */}
      {content.company && (
        <p className="text-sm text-gray-700">Empresa: {content.company}</p>
      )}

      {/* finished */}
      {content.finished !== null && content.finished !== undefined && (
        <p className="text-sm text-gray-700">
          Estado: {content.finished ? "Finalizado" : "En desarrollo"}
        </p>
      )}
    </div>
  </div>
  );
}
