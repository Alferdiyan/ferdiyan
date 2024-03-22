import Image from "next/image";
import React from "react";
import { pitchDeck } from "@/constant";

export default function page() {
    return (
        <div>
            <h1 className="text-lg md:text-3xl font-bold my-10">
                Ebook Design
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
                {pitchDeck.map((project, index) => (
                    <Image
                        key={index}
                        src={project.gambar}
                        alt={project.projectTitle}
                        className="h-full object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
}
