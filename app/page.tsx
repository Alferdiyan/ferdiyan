import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import ContactMe from "@/components/ContactMe";
import Project from "@/components/Project";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="px-5 sm:px-10 md:px-20">
                <About />
                {/* <Navigation /> */}
                <Service />
                <Project />
                <Blogs />
                <ContactMe />
                <Footer />
            </div>
        </main>
    );
}
