
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import '../../../styles/animations.css';
import * as motion from "motion/react-client"
import SplitText from '@/src/components/animatable/SplitText';

export default async function HomePage() {

  const t = await getTranslations('HomePage')
  const tc = await getTranslations('Common')

  return (
    <div className="w-full">
      <div className="absolute top-0 left-0 w-full min-h-96 bg-cover bg-center opacity-50 z-0" style={{ backgroundImage: "url('background_images/header_home.png')" }}></div>
      <div className="flex gap-10">
        <div className="flex w-full flex-col z-1 my-40 ml-5 gap-15">

          <h1 className="text-5xl text-main-text md:text-7xl">{t("title")}</h1>
          <SplitText text = {t("about") } className="text-main-text md:text-3xl"/>
          
        </div>

        <div className="hidden xl:block z-1">
            <Image
              src="/personal_photos/bohemio-hombre-cruzar-brazos.png" // Asegúrate de que la ruta sea correcta
              alt="Imagen de ejemplo"
              width={2000} // Ajusta el ancho según tus necesidades
              height={600} // Ajusta la altura según tus necesidades
              className="h-auto"
            />
        </div>
      </div>
    </div>
  );
}
