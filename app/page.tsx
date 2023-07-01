import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import Service from '@/components/Service';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      {/* <Navigation /> */}
      <Hero />
      <About />
      <Service />
      <Project />
      <ContactMe />
    </main>
  );
}
