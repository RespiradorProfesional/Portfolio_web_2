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
      <nav className="flex justify-center items-center gap-6 bg-background-2 max-w-max mx-auto">
        {links.map(({ slug, title }) => (
          <ButtonTopBar key={slug} slug={slug} title={title} />
        ))}
      </nav>
    </header>
  );
};

export default Topbar;
