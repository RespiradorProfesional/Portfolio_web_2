import { Technology } from "@/src/types/Technology";
import { technologies_images } from "@/src/utils/technologiesImages";

import Image from "next/image";


export default function TechnologyCard({
  technology,
}: {
  technology: Technology;
}) {

  const techImage = technologies_images[technology.name] ?? "";

  const getColorClass = (exp: string) => {
    switch (exp) {
      case "HIGH":
        return "bg-green-200 border-green-400";
      case "MID":
        return "bg-yellow-200 border-yellow-400";
      case "LOW":
        return "bg-red-200 border-red-400";
      default:
        return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <div
      className={`rounded border flex flex-col items-center ${getColorClass(
        technology.experience
      )}`}
    >
      <h2 className="text-xl font-bold">{technology.name}</h2>
      {techImage ? (
        <Image
          src={techImage}
          alt={technology.name}
          width={50}
          height={50}
          className="rounded-full "
        />
      ) : (
        <p>No image available</p>
      )}
      <p>{technology.experience}</p>
    </div>
  );
}
