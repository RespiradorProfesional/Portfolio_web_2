
import Topbar from "@/src/components/common/Topbar";
import React from "react";
import {getTranslations} from 'next-intl/server';
import { setLanguageCode } from "@/src/utils/languageStore";


export default async function WithTopbarLayout({ children, params  }: { children: React.ReactNode, params: { locale: string } }) {

    const tc = await getTranslations('Common')
    const links = [
        { slug: "", title: tc("home") },
        { slug: "about", title: tc("about_me") },
        { slug: "projects", title: tc("projects") },
        { slug: "experience", title: tc("experience") },
        { slug: "contact", title: tc("contact") }
      ];
    
    setLanguageCode(params.locale)

  return (
    <div>
      <Topbar links = {links} />
      <main>
        {children}</main>
    </div>
  );
}