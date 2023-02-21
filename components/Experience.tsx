import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

export default function Experience({}: Props) {
  return (
    <div>
      <h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center mt-24">Experience</h3>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <div></div>
        <div className="w-full flex space-x-5 overflow-x-scroll p-10">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </motion.div>
    </div>
  );
}
