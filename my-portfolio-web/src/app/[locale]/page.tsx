import Image from 'next/image';
import {getTranslations} from 'next-intl/server';

export default async function HomePage() {

  const t = await getTranslations('HomePage')

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full min-h-96 bg-cover bg-center opacity-35 z-0" style={{ backgroundImage: "url('background_images/header_home.png')" }}></div>
      <div className="flex flex-col md:flex-row">
        <div className="p-4 flex-1">
          <h1 className="text-2xl">{t("title")}</h1>
          <p>Este es un texto que se encuentra a la izquierda de la página.</p>
          <div className="language-switcher">
            <button className="btn">
              English
            </button>
            <button className="btn">
              Español
            </button>
          </div>
        </div>

        <div className="p-4 flex-1 md:block hidden z-1">
          <Image
            src="/personal_photos/bohemio-hombre-cruzar-brazos.png" // Asegúrate de que la ruta sea correcta
            alt="Imagen de ejemplo"
            width={800} // Ajusta el ancho según tus necesidades
            height={600} // Ajusta la altura según tus necesidades
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
