"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ButtonTopBarProps = {
  slug: string;
  title: string;
};

const ButtonTopBar = ({ slug, title }: ButtonTopBarProps) => {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1];
  const currentSlug = pathname.split("/")[2]; 
  const fullPath = `/${currentLang}/${slug}`;

  const isActive = slug === currentSlug;

  return (
    <div className="group">
      <Link
        href={fullPath}
        className={`mx-4 my-2 cursor-pointer text-center font-semibold transition-colors duration-300 ease-in-out group-hover:text-accent ${
          isActive ? "text-accent-2" : "text-main-text"
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default ButtonTopBar;
