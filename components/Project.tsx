import React from "react";
import project1 from "../public/images/crisp-works.png";
import project2 from "../public/images/lifecycle-works.png";
import project3 from "../public/images/desktop-design.jpg";
import CardGlass from "./button/CardGlass";
import { projects } from "@/constant";

export default function Project() {
    return (
        <div className="h-full text-center flex flex-col md:text-left sm:max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center ">
            <h1
                id="project"
                className="flex justify-center uppercase tracking-[20px] text-primary text-2xl mt-10 mb-10"
            >
                Project
            </h1>

            <div className="flex justify-center ">
                <div className="flex flex-wrap gap-3 items-center justify-center">
                    {projects.map((project, index) => (
                        <CardGlass
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

{
    /* <div className="flex flex-wrap gap-3 items-center justify-center">
  {projects.map((project, index) => (
    <ProjectCard
      key={index}
      gambar={project.gambar}
      projectTitle={project.projectTitle}
      deskripsi={project.deskripsi}
    />
  ))}
</div> */
}
