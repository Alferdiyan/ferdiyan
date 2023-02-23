import React from 'react';
import Image from 'next/image';

interface Props {
  projectTitle: string;
  deskripsi: string;
  gambar: string;
}

export default function ProjectCard({ projectTitle, deskripsi, gambar }: Props) {
  return (
    <div>
      <div className="flex flex-row  max-w-md md:max-w-xl lg:max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        {/* Card */}
        <div className="w-1/2 ">
          <a href="#">
            <Image className="rounded-t-lg object-fill  flex align-center max-h-min" src={gambar} alt="" />
          </a>
        </div>

        <div className="w-1/2 p-5 flex flex-col justify-center content-center text-center py-10">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight  text-gray-900 dark:text-white">{projectTitle}</h5>
          </a>
          <div>
            <div>
              <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">{deskripsi}</p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#F7AB04] rounded-lg hover:bg-[#FEC868] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Card ENd */}
      </div>
    </div>
  );
}
