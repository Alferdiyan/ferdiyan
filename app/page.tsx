import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import ContactMe from "@/components/ContactMe";
import Project from "@/components/Project";

export async function getServerSideProps() {
    const apiUrl = process.env.APIURL;
    console.log(process.env.APIURL);
    const req = await fetch(`${apiUrl}/api/posts`);
    const res = await req.json();

    console.log(res);

    return {
        prop: {},
    };
}

export default function Home() {
    return (
        <main>
            <Hero />
            <section className="px-5 sm:px-10 md:px-20">
                <About />
            </section>
            {/* <Navigation /> */}

            <Service />
            <Project />
            <ContactMe />
        </main>
    );
}
