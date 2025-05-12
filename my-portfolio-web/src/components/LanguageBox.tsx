
"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { setLanguageCode } from "../utils/languageStore";


type Language = {
  code: string;
  label: string;
};

const LanguageBox=() => {
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = useMemo(() => [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
  ], []); 

  const toggleDropdown = () => setOpen(prev => !prev);

  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language>({ code: "es", label: "Español" });

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = lang.code;
    router.push("/" + segments.join("/"));
  };

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  // Establece el idioma según la URL cuando se monta el componente
  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const langCode = segments[0];

    const foundLang = languages.find((lang) => lang.code === langCode);
    if (foundLang && foundLang.code !== language.code) {
      setLanguage(foundLang);
    }
  }, [language.code, languages, pathname]);


  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-40 px-4 py-2 bg-white text-gray-700 text-lg font-medium border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {language.label}
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-100"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageBox;