import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky  px-5 flex justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon url="https://www.youtube.com/ferdiyan" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/Alferdiyan" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/eka-ferdiyanto-11ab551b2/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.instagram.com/ferdiyan.id" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercasse hidden md:inline-flex">Get In touch</p>
      </motion.div>
    </header>
  );
}
