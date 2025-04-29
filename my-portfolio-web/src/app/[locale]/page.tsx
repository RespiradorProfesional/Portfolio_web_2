
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import '../../../styles/animations.css';
import SplitText from '@/src/components/animatable/SplitText';
import LanguageBox from '@/src/components/LanguageBox';
import Button_nav from '@/src/components/HomePage/ButtonNav';

export default async function HomePage() {

  const t = await getTranslations('HomePage')
  const tc = await getTranslations('Common')

  return (
    <div className="w-full">
      <div className="absolute top-0 left-0 w-full min-h-96 bg-cover bg-center opacity-50 z-0" style={{ backgroundImage: "url('background_images/header_home.png')" }}></div>
      <div className="flex gap-10">
        <div className="flex w-full flex-col z-1 my-40 ml-5 gap-15">
          <h1 className="text-5xl md:text-7xl text-main-text">{t("title")}</h1>
          <SplitText text = {t("about") } className="text-main-text md:text-3xl"/>
          <p className='text-main-text md:text-3xl'>{tc("languages") } </p>
          <LanguageBox />
        </div>

        <div className="hidden xl:block z-1">
            <Image
              src="/personal_photos/bohemio-hombre-cruzar-brazos.png" 
              alt="Imagen de ejemplo"
              width={2000} 
              height={600} 
              className="h-auto"
            />
        </div>
      </div>
      <div className="bg-gradient-to-t from-background-2 to-transparent h-48 w-full"></div>
      <div className="bg-background-2 flex flex-col w-full items-center justify-center">
        <h2 className="text-3xl md:text-5xl my-10 text-main-text">{t("what_want")}</h2>
        <Button_nav slug={'about'} title={tc("about_me")} description={t("about_desc")}/>
        <Button_nav slug={'hola'} title={tc("about_me")} description={t("about_desc")}/>
        <Button_nav slug={'hola'} title={tc("about_me")} description={t("about_desc")}/>
        <Button_nav slug={'hola'} title={tc("about_me")} description={t("about_desc")}/>
      </div>
    </div>
  );
}
