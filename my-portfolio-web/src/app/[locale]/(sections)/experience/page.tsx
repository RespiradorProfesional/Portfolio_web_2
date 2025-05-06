import Link from "next/link";
import Image from "next/image";
import { Experience } from "@/src/types/Experience";
import { fetchExperiences } from "@/src/services/api";
import { getTranslations } from "next-intl/server";

export default async function ExperiencePage () {

    const t = await getTranslations("HomePage");
    const tc = await getTranslations("Common");
  
    const experiences: Experience[] = await fetchExperiences();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative flex flex-col items-center space-y-8 mt-40 pt-40">
        {/* Línea vertical */}
        <div className="absolute left-1/2 transform -translate-x-1 w-1 h-full bg-gray-400"></div>
        {experiences.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Tarjeta del evento */}
            <Link
              href="/experience/1"
              className={`cursor-pointer bg-white p-4 rounded-lg shadow-md border w-64 transition-all duration-300 hover:scale-105
                            ${
                              index % 2 === 0
                                ? "ml-72 text-left"
                                : "mr-72 text-right"
                            }`}
            >
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.description}</p>
              <span className="block text-xs mt-2 text-gray-400">
                {event.creationDate}
              </span>
            </Link>
          </div>
        ))}
        <Image
          src="/personal_photos/personal_photo_example (2).jpeg"
          alt="Imagen de ejemplo"
          width={1000}
          height={1000}
          className="rounded-full w-40 h-40 absolute top-1"
        />
      </div>
    </div>
  );
};
