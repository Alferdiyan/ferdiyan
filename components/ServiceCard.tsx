import Image from 'next/image';
import React from 'react';
import blob from '@/public/blob.svg';

interface Props {
  judul: string;
  description: string;
  logo: StaticImageData;
}

export default function ServiceCard({ judul, description, logo }: Props) {
  return (
    <div className=" border border-stone-800 rounded-lg hover:bg-orange-600 hover:text-2xl h-80 w-80  flex flex-col bg-stone-700  justify-center items-center p-5">
      <div>
        <div className="relative flex justify-center items-center">
          {/* <Image src={blob} alt="image" className="absolute z-10" /> */}
          <Image alt="" src={logo} height={80} width={80} />
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-lg relative">{judul}</h1>
      <p className="text-xs relative text-center">{description}</p>
    </div>
  );
}
