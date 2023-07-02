import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GetInTouch from './button/GetInTouch';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center px-3">
          <div className="w-full md:w-2/3 text-center md:text-left p-10 border border-gray-800 rounded-2xl">
            <div>
              <h3 className="uppercase text-center tracking-[20px] py-6 top-14 text-neutral text-2xl  md:mb-10  ">
                About Me
              </h3>
            </div>
            <p className="text-neutral text-lg mb-4 ">
              Hi, my name is Eka Ferdiyanto and I'm a professional front-end
              developer with over 5 years of experience in building responsive
              and user-friendly websites. I specialize in front-end development
              using modern web technologies such as React and Figma.
            </p>
            <p className="text-neutral text-lg mb-4">
              I am passionate about creating clean, elegant, and functional
              designs that enhance the user experience. I have a strong eye for
              detail and a deep understanding of the latest web design trends
              and best practices.
            </p>

            <p className="text-neutral text-lg mb-4">
              In my free time, I enjoy exploring new technologies on web
              development. I also contribute to open-source projects and share
              my knowledge and experience with the community through blog posts
              and tutorials.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <GetInTouch />
            <div className="border px-4 py-2 rounded-full hover:bg-orange-400">
              <Link href="#">
                <button>download My CV</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
