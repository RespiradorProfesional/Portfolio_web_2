"use client";
import ButtonTopBar from "@/src/components/common/ButtonTopBar";

type LinkItem = {
  slug: string;
  title: string;
};
type Props = {
  links: LinkItem[];
};

const Topbar = ({ links }: Props) => {
  return (
    <header className="w-full fixed top-7 left-0 z-50">
      {/* Navegación */}
      <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 bg-background-2 w-full px-4 py-2">
        {links.map(({ slug, title }) => (
          <ButtonTopBar key={slug} slug={slug} title={title} />
        ))}
      </nav>
    </header>
  );
};

export default Topbar;
