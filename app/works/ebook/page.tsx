import Image from "next/image";
import React from "react";
import { ebook } from "@/constant";

export default function page() {
    return (
        <div>
            <h1 className="text-lg font-bold my-10">Ebook Design</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {ebook.map((project, index) => (
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
