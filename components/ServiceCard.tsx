"use client";
import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";
import blob from "@/public/blob.svg";
import { motion } from "framer-motion";

interface Props {
    judul: string;
    description: string;
    logo: StaticImageData;
}

export default function ServiceCard({ judul, description, logo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,

                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "easeIn",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            }}
            className=" rounded-lg  hover:text-2xl h-80 w-80  flex flex-col   justify-center items-center p-5"
        >
            <div>
                <div className="relative flex justify-center items-center ">
                    {/* <Image src={blob} alt="image" className="absolute z-10" /> */}
                    <Image
                        src={logo}
                        width="100"
                        height="100"
                        alt="object"
                        className=""
                    />
                </div>
            </div>
            <br />
            <br />
            <h1 className="text-lg relative text-accent font-bold">{judul}</h1>
            <p className="text-xs relative text-center hover:text-accent">
                {description}
            </p>
        </motion.div>
    );
}
