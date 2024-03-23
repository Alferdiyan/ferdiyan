"use client";
import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { TitlePage } from "./TypingText";

const Slideshow = () => {
    //Array of Images
    const images = [
        "slideshow/gridYT.webp",
        "slideshow/instagram1.png",
        "slideshow/instagram2.png",
        "slideshow/instagram3.png",
    ];

    //These are custom properties for zoom effect while slide-show
    const zoomInProperties = {
        scale: 1,
        duration: 2000,
        transitionDuration: 300,
        infinite: true,
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
        <div className="w-full  rounded-sm overflow-hidden ">
            {/* <TitlePage title="Portfolio" /> */}
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
    );
};

export default Slideshow;
