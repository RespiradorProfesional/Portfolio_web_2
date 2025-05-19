import TechnologiesIcons from "./TechnologiesIcons";
import Link from "next/link";

type LinkCardProps = {
  title: string;
  technologies: string[];
  link: string;
};

const LinkCard = ({ title, technologies, link }: LinkCardProps) => {
  return (
    <div className="w-full">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="flex flex-col justify-center items-center bg-cover bg-center text-center h-44 
                            transition-all duration-300 ease-in-out transform hover:h-52 hover:opacity-90 hover:border-b-2 hover:border-accent hover:bg-background cursor-pointer"
        >
          <h3 className="text-xl font-semibold">{title}</h3>

          <TechnologiesIcons technologies_display={technologies} />
        </div>
      </Link>
    </div>
  );
};

export default LinkCard;
