import Image from "next/image";
import React from "react";
import { socialMedia } from "@/constant";

export default function page() {
    return (
        <div>
            <h1 className="text-lg font-bold my-10">Social Media Design</h1>
            <div className="grid md:grid-cols-1 gap-4">
                {socialMedia.map((project, index) => (
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
