
import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import { Technologie } from '@/src/types/technologies';
import TechnologieCard from '@/src/components/common/TechnologieCard';
import { fetchTechnologies } from '@/src/services/api';


export default async function AboutPage() {
  const t = await getTranslations('AboutPage')
  const tc = await getTranslations('Common')

  const technologies = await fetchTechnologies();

  return (

    <div>
      <div className="flex flex-col justify-center items-center bg-[url('/background_images/background_ball.png')] bg-cover bg-center bg-no-repeat min-h-screen">
        <Image
          src="/personal_photos/personal_photo_example (2).jpeg"
          alt="Imagen de ejemplo"
          width={2000} 
          height={600} 
          className="rounded-full w-40 h-40"
        />
        <p className='max-w-3xl text-main-text bg-background-2 border-4 border-background-2 rounded-lg p-4'>{t("description") }</p>
        <p className='max-w-96 text-second-text bg-background-2 border-4 border-background-2 rounded-lg p-4'>{t("description_2") }</p>
        {technologies.map((technologie : Technologie) => (
          <TechnologieCard key={technologie.id} technologie={technologie} />
        ))}
      </div>
    </div>
  );
}