"use client";
import Image from "next/image";
import React from "react";
import drawer from "@/public/images/hero.svg";
import GetInTouch from "@/components/button/GetInTouch";
import cloud from "@/public/cloud.png";
import background from "@/public/vector-background.png";
import ferdiyan from "@/public/images/Eka_ferdiyanto.png";
import { motion } from "framer-motion";

import { profile } from "@/constant/index";
import Navbar from "./Navbar";
import { RunningText } from "./TypingText";

export default function Hero() {
    return (
        <div className="bg-base-200 md:min-h-screen  relative">
            <div className="pt-8 ">
                <Navbar />
            </div>
            <motion.div className="md:mx-5  relative z-10 py-14 items-center justify-center flex ">
                <div className="hero-content flex-col-reverse lg:flex-row">
                    <div className="gap-2 flex flex-col md:px-10  ">
                        {profile.map((index) => (
                            <div>
                                <div className="text-accent text-lg font-semibold">
                                    <RunningText
                                        color="text-primary"
                                        align="left"
                                    />
                                </div>
                                <h1 className="text-3xl  md:text-5xl font-bold">
                                    {index.role}
                                </h1>
                                <p className="py-6">{index.description}</p>
                            </div>
                        ))}
                        <div className="flex gap-3  items-center  ">
                            <GetInTouch />
                        </div>
                    </div>
                    <motion.figure
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
                    >
                        <Image
                            alt="Profile Photo"
                            src={drawer}
                            className=" rounded-full "
                        />
                    </motion.figure>
                </div>
            </motion.div>
            <div className="z-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="cloud absolute bottom-0 fill-base-100"
                >
                    <path
                        // fill="#A9A9A9"
                        fill-opacity="1"
                        d="M0,160L30,160C60,160,120,160,180,138.7C240,117,300,75,360,80C420,85,480,139,540,149.3C600,160,660,128,720,122.7C780,117,840,139,900,170.7C960,203,1020,245,1080,240C1140,235,1200,181,1260,160C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                    ></path>
                </svg>

                <Image
                    src={background}
                    className="cloud bg-cover absolute bottom-0 right-0 left-0 top-0 z-0"
                    alt="cloud"
                />
            </div>
        </div>
    );
}
