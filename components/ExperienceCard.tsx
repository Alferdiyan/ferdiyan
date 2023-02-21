import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="border h-[200] w-[300] flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 snap-center bg-[#292929] p-10">
      {/* <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover items-center"
                src="https://alferdiyan.github.io/img/Eka-Ferdiyanto1.jpg"
                alt=""
            /> */}
      <div className="px-0 md:px-20">
        <h4 className="text-4xl font-light">CEO Alferdiyan Code</h4>
        <p className="font-bold text-2xl mt-1">Ferdiyan</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="https://alferdiyan.github.io/img/Eka-Ferdiyanto1.jpg" alt="" />
          <img className="h-10 w-10 rounded-full" src="https://alferdiyan.github.io/img/Eka-Ferdiyanto1.jpg" alt="" />
          <img className="h-10 w-10 rounded-full" src="https://alferdiyan.github.io/img/Eka-Ferdiyanto1.jpg" alt="" />
          <img className="h-10 w-10 rounded-full" src="https://alferdiyan.github.io/img/Eka-Ferdiyanto1.jpg" alt="" />
          {/* tech Used */}
          {/* tech Used */}
          {/* tech Used */}
        </div>
        <p>Started Work .... - Ended ... </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  );
}
