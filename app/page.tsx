import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import Service from '@/components/Service';
import Hero1 from '@/components/Hero1';
import { profile } from '@/components/constant';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      {/* <Navigation /> */}
      {/* <Hero /> */}
      <Hero1
        name="Eka Ferdiyanto"
        role="web developer"
        description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi"
      />
      {/* <About /> */}
      <Service />
      <Project />
      <ContactMe />
    </main>
  );
}
