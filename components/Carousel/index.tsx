import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";
import { projects } from "@/constant";
import CardGlass from "../button/CardGlass";

type Props = {};

export default function index({}: Props) {
    return (
        <div className="h-full">
            <Carousel>
                {projects.map((project, index) => (
                    <CardGlass
                        key={index}
                        images={project.gambar}
                        cardTitle={project.projectTitle}
                        description={project.deskripsi}
                    />
                ))}
            </Carousel>
        </div>
    );
}
