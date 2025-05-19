import { Technology } from "@/src/types/Technology";
import { technologies_images } from "@/src/utils/technologiesImages";
import Image from "next/image";

const TechnologiesIcons = ({
  technologies_display,
}: {
  technologies_display: string[];
}) => {
  console.log(technologies_display);
  return (
    <div className="flex gap-2">
      {technologies_display.map((tech, i) => {
        const techImage = technologies_images[tech] ?? "/error_image.png";
        return (
          <Image
            key={i}
            src={techImage}
            alt={tech}
            width={50}
            height={50}
            className="rounded-full border-2 border-white"
          />
        );
      })}
    </div>
  );
};

export default TechnologiesIcons;
