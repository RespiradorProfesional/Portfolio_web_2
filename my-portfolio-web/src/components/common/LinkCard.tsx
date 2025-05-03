import { Technology } from "@/src/types/Technology";
import TechnologiesIcons from "./TechnologiesIcons";

type LinkCardProps = {
  title: string;
  technologies: Technology[];
  link: string;
};

const LinkCard = ({ title, technologies, link }: LinkCardProps) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="flex flex-col justify-center items-center bg-cover bg-center text-center h-44
                            transition-all duration-300 ease-in-out transform hover:h-52 hover:opacity-90 shadow-lg cursor-pointer"
        >
          <h3 className="text-xl font-semibold">{title}</h3>

          <TechnologiesIcons technologies_display={technologies} />
        </div>
      </a>
    </div>
  );
};

export default LinkCard;
