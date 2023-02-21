import React from 'react';
import project1 from '../public/image/crisp-works.png';
import project2 from '../public/image/lifecycle-works.png';
import project3 from '../public/image/desktop-design.jpg';
import ProjectCard from './ProjectCard';

export default function Project() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-full text-center flex flex-col md:text-left max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center ">
      <h1 className="flex justify-center uppercase tracking-[20px] text-gray-500 text-2xl mt-10 mb-10">Project</h1>

      <div className="flex justify-center">
        <div className="flex flex-col gap-y-3">
          <ProjectCard gambar={project3} projectTitle="Alpo Picture" deskripsi="Web Developer" />
          <ProjectCard gambar={project1} projectTitle="Noteworthy technology" deskripsi="Product design" />
          <ProjectCard gambar={project2} projectTitle="Clonning Heylink me" deskripsi="Fornt End developer" />
        </div>
      </div>

      {/* <div className="w-full top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div> */}
    </div>
  );
}
