import Footer from '../components/Footer';
import Head from 'next/head';
import About from '../components/About';
import ExperiencePage from '../components/Service';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Project';
import ContactMe from '../components/ContactMe';
import Service from '../components/Service';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Alferdiyan's Porfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="Hero">
        <Hero />
      </section>
      {/* about */}
      <section id="About">
        <About />
      </section>

      <section id="Service" className="h-full">
        <Service />
      </section>
      {/* <section id="Skills ">
        <Skills />
      </section> */}
      {/* Project */}
      <section id="Project" className="h-full">
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
