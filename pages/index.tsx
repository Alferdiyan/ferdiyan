import Footer from '../components/Footer';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Project';
import ContactMe from '../components/ContactMe';
import Service from '../components/Service';
import NavScrolled from '@/components/NavScrolled';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    // <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Ferdiyan | Front End Developer</title>
      </Head>
      {/* Header */}
      <section>{/* <Navbar /> */}</section>
      {/* <NavScrolled /> */}
      {/* <MobileNav /> */}
      <Header />
      {/* Hero */}
      <section id="Hero">
        <Hero />
      </section>
      {/* about */}
      <section id="About">
        <About />
      </section>

      <section id="Service" className="lg:h-full">
        <Service />
      </section>

      <section id="Project" className="lg:h-full">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact">
        <ContactMe />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
