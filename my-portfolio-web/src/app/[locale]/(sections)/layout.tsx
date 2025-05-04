
import Topbar from "@/src/components/common/Topbar";
import React from "react";
import {getTranslations} from 'next-intl/server';

export default async function WithTopbarLayout({ children }: { children: React.ReactNode }) {

    const tc = await getTranslations('Common')

    const links = [
        { slug: "", title: tc("home") },
        { slug: "about", title: tc("about_me") },
        { slug: "projects", title: tc("projects") },
        { slug: "experience", title: tc("experience") },
        { slug: "experience", title: tc("contact") }
      ];
    
  return (
    <div>
      <Topbar links = {links} />
      <main>{children}</main>
    </div>
  );
}