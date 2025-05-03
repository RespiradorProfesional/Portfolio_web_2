import { Technology } from "@/src/types/Technology";
import { technologies_images } from "@/src/utils/technologiesImages";
import Image from "next/image";

type TechnologiesIconsProps = {
  technologies_display: Technology[];
};

const TechnologiesIcons = ({
  technologies_display,
}: TechnologiesIconsProps) => {
  return (
    <div className={`flex gap-2`}>
      {technologies_display.map((tech, i) => (
        <Image
          key={i}
          src={technologies_images[tech.name]}
          alt={tech.name}
          width={2000}
          height={600}
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      ))}
    </div>
  );
};

export default TechnologiesIcons;
