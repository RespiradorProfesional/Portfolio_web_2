"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ButtonNavProps = {
  slug: string;
  title: string;
  description: string;
};

const ButtonNav = ({ slug, title, description }: ButtonNavProps) => {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1]; // extrae "es" o "en"

  const fullPath = `/${currentLang}/${slug}`;

  return (
    <div className="group flex">
      <Link
        href={fullPath}
        className=" h-44 bg-background min-w-7x1
                    transition-all duration-300 ease-in-out transform hover:text-accent hover:border-b-2 hover:border-accent md:hover:px-16 cursor-pointer"
      >
        <h3 className="mt-10 text-xl mb-5 text-center font-semibold text-second-text group-hover:text-accent">
          {title}
        </h3>
        <p className="text-second-text mx-10 group-hover:text-accent">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default ButtonNav;
