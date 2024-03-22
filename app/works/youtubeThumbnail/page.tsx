"use client";

import Image from "next/image";
import { youtube } from "@/constant";

import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function page() {
    //Array of Images
    const images = [
        "/images/thumbnail/youtubeThumbnail1.png",
        "/images/thumbnail/youtubeThumbnail2.png",
        "/images/thumbnail/youtubeThumbnail3.png",
    ];

    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
        scale: 1,
        duration: 3000,
        transitionDuration: 300,
        infinite: true,
        ArrowLeftIcon: false,
        ArrowRightIcon: true,
        prevArrow: (
            <div className="ml-10 ">
                <ArrowLeftIcon className="h-8 w-8  rounded-full bg-primary text-base cursor-pointer hover:text-accent" />
            </div>
        ),
        nextArrow: (
            <div className="mr-10 ">
                <ArrowRightIcon className="h-8 w-8 rounded-full bg-primary text-base cursor-pointer hover:text-accent" />
            </div>
        ),
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-lg font-bold my-10">Youtube Thumbnail</h1>
            <div className="w-full  rounded-3xl overflow-hidden border border-red-300">
                <Zoom {...zoomInProperties}>
                    {images.map((each, index) => (
                        <div
                            key={index}
                            className="flex justify-center md:items-center   "
                        >
                            <img className="" src={each} />
                        </div>
                    ))}
                </Zoom>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-7">
                {youtube.map((project, index) => (
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
