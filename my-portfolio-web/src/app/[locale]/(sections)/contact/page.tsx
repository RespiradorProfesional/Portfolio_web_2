
import { getTranslations } from "next-intl/server";
import "../../../../../styles/animations.css";
import Image from "next/image";
import Link from "next/link";

export default async function ContactPage() {

  const t = await getTranslations("ContactPage");

  return (
    <div className="w-full flex flex-col items-center justify-center mt-32 gap-8 px-4 text-center">
      <h1 className="text-3xl font-bold text-main-text">{t("contact_me")}</h1>

      <div className="flex flex-col items-center gap-6 bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <Link
          href="https://www.linkedin.com/in/néstor-álvarez-pareja-731476257/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Image
            src="/social_media_icons/LinkedIn_icon.svg.webp"
            alt="LinkedIn"
            width={1000}
            height={1000}
            className="w-6 h-6"
          />
          LinkedIn
        </Link>

        <Link
          href="https://github.com/RespiradorProfesional"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          <Image
            src="/social_media_icons/github-icon-2.svg"
            alt="GitHub"
            width={1000}
            height={1000}
            className="w-6 h-6"
          />
          GitHub
        </Link>

        <h3 className="text-gray-700">{t("send_email")}</h3>
        <p className="text-gray-800 font-medium">nestorjobemail@gmail.com</p>
      </div>
    </div>
  );
}
