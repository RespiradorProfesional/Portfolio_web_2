"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ButtonTopBarProps = {
  slug: string;
  title: string;
};

const ButtonTopBar = ({ slug, title }: ButtonTopBarProps) => {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1]; // extrae "es" o "en"

  const fullPath = `/${currentLang}/${slug}`;

  return (
    <div className="group">
      <Link
        href={fullPath}
        className="mx-4 my-2 cursor-pointer text-center font-semibold text-main-text transition-colors duration-300 ease-in-out group-hover:text-accent"
      >
        {title}
      </Link>
    </div>
  );
};

export default ButtonTopBar;
