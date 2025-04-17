
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';

export default async function About() {
  const t = await getTranslations('AboutPage')
  const tc = await getTranslations('Common')

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center bg-[url('/background_images/background_ball.png')] bg-cover bg-center bg-no-repeat min-h-screen">
        <Image
          src="/personal_photos/personal_photo_example (2).jpeg" // Asegúrate de que la ruta sea correcta
          alt="Imagen de ejemplo"
          width={2000} // Ajusta el ancho según tus necesidades
          height={600} // Ajusta la altura según tus necesidades
          className="rounded-full w-40 h-40"
        />
        <p className='max-w-3xl text-main-text bg-background-2 border-4 border-background-2 rounded-lg p-4'>{t("description") }</p>
        <p className='max-w-96 text-second-text bg-background-2 border-4 border-background-2 rounded-lg p-4'>{t("description_2") }</p>
      </div>
    </div>
  );
}
