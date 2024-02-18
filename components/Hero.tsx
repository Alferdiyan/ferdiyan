import Image from "next/image";
import React from "react";
import photo from "@/public/images/Eka_ferdiyanto.png";
import GetInTouch from "@/components/button/GetInTouch";
import cloud from "@/public/cloud.png";
import background from "@/public/vector-background.png";

import { profile } from "@/constant/index";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <div className="bg-info h-screen md:min-h-screen  relative">
            <div className="pt-8 ">
                <Navbar />
            </div>
            <div className="hero  relative z-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="gap-2 flex flex-col md:px-10  ">
                        {profile.map((index) => (
                            <div>
                                <p className="text-primary text-lg font-semibold">
                                    Hello I am {index.name}
                                </p>
                                <h1 className="text-5xl font-bold">
                                    {index.role}
                                </h1>
                                <p className="py-6">{index.description}</p>
                            </div>
                        ))}
                        <div className="flex gap-3  items-center">
                            <GetInTouch />
                            <p>or</p>
                            <button className="text-primary hover:text-secondary">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end border items-end">
                    {/* <Image src={cloud} className="cloud" alt="cloud" />
                    <Image
                        src={cloudSoft}
                        className="cloud-soft"
                        alt="cloud-soft"
                    /> */}
                </div>
            </div>
            <div className="z-10">
                <Image
                    src={cloud}
                    className="cloud absolute bottom-0"
                    alt="cloud"
                />
                <Image
                    src={cloud}
                    className="cloud absolute bottom-5 opacity-25"
                    alt="cloud"
                />

                <Image
                    src={background}
                    className="cloud bg-cover absolute bottom-0 right-0 left-0 top-0 z-0"
                    alt="cloud"
                />
            </div>
        </div>
    );
}
