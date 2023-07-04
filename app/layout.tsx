'use client';
import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import abstract from '../public/image/abstrak.png';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Logo from '@/public/ferdiyan.svg';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ferdiyan',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-base" data-theme="mytheme">
      <body className={`${inter.className} overflow-x-hidden`}>
        <section className="px-20">
          <Navbar />
          {children}
        </section>
        <footer className="footer   items-center p-4 bg-primary text-neutral-content">
          <div className="items-center grid-flow-col">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <p>Copyright Ferdiyan© 2023 - All right reserved</p>
          </div>
          <div className=" grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
              <SocialIcon
                url="https://www.youtube.com/ferdiyan"
                fgColor="white"
                bgColor="transparent"
              />
              <SocialIcon
                url="https://github.com/Alferdiyan"
                fgColor="white"
                bgColor="transparent"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/eka-ferdiyanto-11ab551b2/"
                fgColor="white"
                bgColor="transparent"
              />
              <SocialIcon
                url="https://www.instagram.com/ferdiyan.id"
                fgColor="white"
                bgColor="transparent"
              />
            </motion.div>
          </div>
        </footer>
      </body>
    </html>
  );
}
