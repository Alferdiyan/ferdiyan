import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import GetInTouch from "./button/GetInTouch";
import tech from "@/public/tech-icons.png";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="py-16">
            <div>
                <div className=" mx-auto flex flex-col md:flex-row justify-center items-center gap-9">
                    <Image src={tech} alt="tech" className="max-w-xs "></Image>
                    <div className="max-w-xs sm:max-w-lg flex flex-col justify-center items-center px-3">
                        <h3 className="uppercase text-center  tracking-[20px] py-6 top-14 text-neutral text-2xl  md:mb-10  ">
                            About Me
                        </h3>
                        <h4 className=" text-center text-neutral sm:text-left font-semibold text-lg mb-4  ">
                            Hi, my name is Eka Ferdiyanto and I'm a professional
                            front-end developer with over 5 years of experience
                            in building responsive and user-friendly websites. I
                            specialize in front-end development using modern web
                            technologies such as React and Figma.
                        </h4>
                        <Link
                            href="#"
                            className="border px-4 py-2 rounded-full hover:bg-orange-400"
                        >
                            <button>download My CV</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

{
    /* <p className="text-neutral text-lg mb-4">
                            I am passionate about creating clean, elegant, and
                            functional designs that enhance the user experience.
                            I have a strong eye for detail and a deep
                            understanding of the latest web design trends and
                            best practices.
                        </p>

                        <p className="text-neutral text-lg mb-4">
                            In my free time, I enjoy exploring new technologies
                            on web development. I also contribute to open-source
                            projects and share my knowledge and experience with
                            the community through blog posts and tutorials.
                        </p> */
}
