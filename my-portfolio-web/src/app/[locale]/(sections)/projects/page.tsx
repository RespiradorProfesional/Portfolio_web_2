import { getTranslations } from "next-intl/server";
import "../../../../../styles/animations.css";
import Image from "next/image";
import ImageBackground from "@/src/components/common/ImageBackground";
import { Project } from "@/src/types/Project";
import { fetchProjects } from "@/src/services/api";
import TabShowProjects from "@/src/components/page_components/ProjectPage/TabShowProjects";

export default async function ProjectPage() {
  const t = await getTranslations("ProjectPage");

  const projects: Project[] = await fetchProjects();

  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center justify-center w-full pt-52 mt-32">
        <Image
          src="/personal_photos/personal_photo_example (2).jpeg"
          alt="Imagen de ejemplo"
          width={1000}
          height={1000}
          className="rounded-4xl w-70 h-70 absolute top-1"
        />
        <div className="bg-background-2 pt-24 pb-10 w-full flex justify-center">
          <p className="max-w-[500]">
            {t("description")}
          </p>
        </div>
        <div className="bg-gradient-to-t from-background-2 to-transparent h-48 w-full -scale-y-100" />
        <TabShowProjects projects={projects} title_finished={t("finished")}  title_unfinished={t("unfinished")} />
      </div>
    </div>
  );
}
