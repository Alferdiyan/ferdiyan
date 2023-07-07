'use client';
import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Logo from '@/public/ferdiyan.svg';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-base" data-theme="mytheme">
      <body className={`${inter.className} overflow-x-hidden`}>
        <section className="px-5 sm:px-10 md:px-20">
          <Navbar />
          {children}
        </section>
        <footer className="footer   items-center p-4 bg-primary text-neutral-content">
          <div className="items-center grid-flow-col">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <p>Copyright Ferdiyan© 2023 - All right reserved</p>
          </div>
          <div className="grid-flow-col gap-4 place-self-center md:justify-self-end">
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
              transition={{
                duration: 1.5,
              }}
              className="flex flex-row items-center"
            >
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
            </motion.div>
          </div>
        </footer>
      </body>
    </html>
  );
}
