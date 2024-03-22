import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import ContactMe from "@/components/ContactMe";
import Project from "@/components/Project";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/Footer";
import Slideshow from "@/components/SlideShow";
import PitchDeck from "@/components/portfolio/PitchDeck";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="px-5 sm:px-10 md:px-20">
                {/* <Navigation /> */}
                <div className="px-2 md:px-16">
                    <Slideshow />
                </div>
                <Service />
                <PitchDeck />
                <Project />
                {/* <Carousel /> */}
                {/* <Blogs /> */}

                <About />
                <ContactMe />
                <Footer />
            </div>
        </main>
    );
}
