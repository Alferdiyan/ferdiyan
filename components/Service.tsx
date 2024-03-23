"use client";
import React from "react";
import ServicesCard from "./ServiceCard";
import mobileDev from "../public/mobileDev.png";
import webDev from "../public/webDev.png";
import uiUX from "../public/uiUX.png";
import { motion } from "framer-motion";

import graphicDesigner from "../public/services/graphicDesign.svg";
import book from "../public/services/book.svg";
import { RunningText, TitlePage } from "./TypingText";
import { idText } from "typescript";

const servicesData = [
    {
        judul: "Graphic Design",
        description:
            "We offer professional graphic design services that elevate your business image and make you stand out.",
        logo: graphicDesigner,
    },
    {
        judul: "Web Designer",
        description:
            "The website is like a house and it is appropriate to give it a good look and according to its function.",
        logo: webDev,
    },
    // {
    //     judul: "UI Design",
    //     description:
    //         "Intuitive, easy to use, and visually appealing for the user",
    //     logo: uiUX,
    // },
    // {
    //     judul: "Photo Editing",
    //     description:
    //         "Elevate your brand. We'll create eye-catching visuals: enhance, restore, and creatively modify your photos.",
    //     logo: uiUX,
    // },
    // {
    //     judul: "E-mail Marketing Design",
    //     description:
    //         "Assist you in increasing email engagement by creating visually appealing and easy-to-read emails that encourage your subscribers to act.",
    //     logo: uiUX,
    // },
    {
        judul: "Social Media Design",
        description:
            "Help you increase your social media presence by creating shareable content that resonates with your audience.",
        logo: uiUX,
    },
    {
        judul: "Book and Layout",
        description:
            "Create eye-catching illustrations and layouts that enhance your book's visual appeal and readability.",
        logo: book,
    },
];

export default function Service(): JSX.Element {
    return (
        <div className="h-max py-8" id="service">
            {/* <div className="flex justify-center uppercase tracking-[20px] text-primary text-2xl mt-10 m-30">
                Provide Services
            </div> */}
            <div></div>
            <TitlePage
                title="Services"
                color="#7d7d7d"
                align="center"
                id="service"
            />

            <motion.div
                transition={{
                    ease: "linear",
                    duration: 4,
                    x: { duration: 2 },
                }}
                className="flex flex-col md:grid md:grid-cols-4 gap-4 my-20 items-center justify-center "
            >
                {servicesData.map((service, index) => (
                    <ServicesCard
                        key={index}
                        judul={service.judul}
                        description={service.description}
                        logo={service.logo}
                    />
                ))}
            </motion.div>
        </div>
    );
}
