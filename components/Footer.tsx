'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Logo from '@/public/ferdiyan.svg';
import Image from 'next/image';

const socialIcons = [
  {
    url: 'https://www.youtube.com/ferdiyan',
    icon: 'youtube',
  },
  {
    url: 'https://github.com/Alferdiyan',
    icon: 'github',
  },
  {
    url: 'https://www.linkedin.com/in/eka-ferdiyanto-11ab551b2/',
    icon: 'linkedin',
  },
  {
    url: 'https://www.instagram.com/ferdiyan.id',
    icon: 'instagram',
  },
];

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-primary text-neutral-content">
      <div className="items-center grid-flow-col place-self-center sm:justify-self-start">
        <Image src={Logo} alt="logo" width={20} height={20} />
        <p>Copyright Ferdiyan© 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 place-self-center sm:justify-self-end">
        <div className="flex flex-row items-center">
          {socialIcons.map((icon, index) => (
            <SocialIcon
              key={index}
              url={icon.url}
              fgColor="white"
              bgColor="transparent"
              target="_blank"
              rel="noopener noreferrer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
