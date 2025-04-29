
import Topbar from "@/src/components/common/Topbar";
import React from "react";
import {getTranslations} from 'next-intl/server';

export default async function WithTopbarLayout({ children }: { children: React.ReactNode }) {

    const tc = await getTranslations('Common')

    const links = [
        { slug: "about", title: tc("about") },
        { slug: "projects", title: tc("projects") },
        { slug: "contact", title: tc("contact") },
      ];
    
  return (
    <div>
      <Topbar links = {links} />
      <main>{children}</main>
    </div>
  );
}