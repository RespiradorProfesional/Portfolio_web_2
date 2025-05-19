
import Topbar from "@/src/components/common/Topbar";
import React from "react";
import {getTranslations} from 'next-intl/server';
import ClientLanguageSetter from "@/src/components/common/ClientLanguageSetter";
import ImageBackground from "@/src/components/common/ImageBackground";


export default async function WithTopbarLayout({ children, params  }: { children: React.ReactNode, params: { locale: string } }) {

    const tc = await getTranslations('Common')
    const links = [
        { slug: "", title: tc("home") },
        { slug: "about", title: tc("about_me") },
        { slug: "projects", title: tc("projects") },
        { slug: "experience", title: tc("experience") },
        { slug: "contact", title: tc("contact") }
      ];

  return (
    <div>
      <ClientLanguageSetter params={params} />
      <main>
        <Topbar links = {links} />
        <ImageBackground />
        {children}</main>
    </div>
  );
}