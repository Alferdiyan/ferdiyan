import Image from 'next/image';
import React from 'react';
import photo from '../public/image/Eka_ferdiyanto.png';
import GetInTouch from './button/GetInTouch';
import blob from '@/public/blob.svg';

type Props = {
  name: string;
  role: string;
  description: string;
};

const Hero: React.FC<Props> = ({ name, role, description }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <Image
              src={photo}
              alt="hero"
              width={600}
              className="top-0 z-10 max-w-xs md:max-w-xl  rounded-full  bg-transparent"
            />
          </div>
          <div>
            <p className="text-primary text-lg font-semibold">{name}</p>
            <h1 className="text-5xl font-bold">{role}</h1>
            <p className="py-6">{description}</p>
            <div className="gap-2 flex items-center ">
              <GetInTouch />

              <p>or</p>
              <button className="text-primary hover:text-secondary">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
