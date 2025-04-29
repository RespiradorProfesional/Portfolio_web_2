import { Technologie } from "@/src/types/technologies";

import Image from 'next/image';


const technologies_images= [
    {name : "Java" , image: "/technologies_images/java.png"},
    {name :"React" , image:"/technologies_images/react.png"},
]

export default function TechnologieCard({ technologie }: { technologie: Technologie }) {

  const techImage = technologies_images.find(tech => tech.name === technologie.name)?.image;
  
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold">{technologie.name}</h2>
            {techImage ? (
        <Image src={techImage} alt={technologie.name}
        width={2000} 
        height={600} 
        className="rounded-full w-40 h-40" />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}