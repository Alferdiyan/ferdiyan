import React from "react";
import project1 from "../public/images/crisp-works.png";
import project2 from "../public/images/lifecycle-works.png";
import project3 from "../public/images/desktop-design.jpg";
import { pitchDeck } from "@/constant";
import CardLanscape from "../blogs/CardLanscape";
import { TitlePage } from "../TypingText";

export default function PitchDeck() {
    return (
        <div className="h-full text-center flex flex-col md:text-left sm:max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center ">
            {/* <h1
                id="project"
                className="flex justify-center uppercase tracking-[20px] text-primary text-2xl mt-10 mb-10"
            >
                Pitch Deck Presentation
            </h1> */}
            <TitlePage
                title="Pitch Deck Presentation"
                color="#7d7d7d"
                align="center"
            />

            <div className="flex justify-center ">
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    {pitchDeck.map((project, index) => (
                        <CardLanscape
                            key={index}
                            images={project.gambar}
                            cardTitle={project.projectTitle}
                            description={project.deskripsi}
                            href={project.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
