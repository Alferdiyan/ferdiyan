import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="">
      <div>
        <h3 className="uppercase text-center tracking-[20px] py-10 top-14 text-gray-400 text-2xl md:mb-28  ">About</h3>
      </div>
      <div className="flex flex-col  text-center md:text-left md:flex-row  max-w-7xl px-10 mx-auto items-center ">
        <div className="md:w-1/3">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
            src="https://alferdiyan.github.io/img/Eka-Ferdiyanto1.jpg"
            className="mb-20  md:mb-0 flex-shrink-0 w-36 top-30 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[300px] relative"
          />
        </div>
        <div className="w-3/4">
          <div className="space-y-10 px-0 md:px-10">
            <h2 className="text-4xl font-semibold">
              Here is a <span className="underline decoration-[#f7ab0a]">Little</span> Backgorund
            </h2>
            <p>
              Hello I'm Ferdiyan, a multidisciplinary fron end developer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
