"use client";

import Image from "next/image";

import React, { useState } from "react";
import Logo from "@/public/ferdiyan.svg";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import GetInTouch from "./button/GetInTouch";

const Navbar = () => {
    const [menuItems] = useState([
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Behance", link: "https://www.behance.net/ferdiyanUI" },
    ]);
    const [open, setOpen] = useState(false);

    return (
        <div className="px-5 sm:px-10 md:px-20">
            <div className="  z-20 text-primary   relative">
                {/* Desktop Nav */}
                {/* <div className="hidden md:flex md:justify-between items-center"> */}
                <div className="justify-between hidden md:flex">
                    {/* Nav Menu */}

                    <a
                        href="/"
                        className="flex gap-2 font-semibold hover:text-accent text-3xl"
                    >
                        <Image src={Logo} alt="logo" width={40} height={40} />
                        Ferdiyan
                    </a>

                    <ul className={`flex gap-4 justify-center   items-center`}>
                        {menuItems.map((item, index) => (
                            <li className="hover:text-accent" key={index}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Desktop Nav */}

                {/* Mobile Nav */}
                <div className="flex justify-between items-center md:hidden mb-10 ">
                    <div className="fixed top-3 left-3">
                        {/* <Image src="/logo1.svg" alt="logo" width={50} height={50} /> */}
                        <div className="flex gap-2 justify-center items-center">
                            <Image
                                src={Logo}
                                alt="logo"
                                width={20}
                                height={20}
                            />

                            <a
                                href="/"
                                className="font-semibold hover:text-accent "
                            >
                                Ferdiyan
                            </a>
                        </div>
                    </div>

                    <div className="">
                        <div
                            onClick={() => setOpen(false)}
                            className={`${
                                open ? "block" : "hidden"
                            } bg-transparent fixed inset-0 z-40 cursor`}
                        ></div>
                        <div
                            className="cursor-pointer fixed top-3 right-3 z-50 hover:text-accent"
                            onClick={() => setOpen(!open)}
                        >
                            {!open ? (
                                <CgMenuRight size={24} color="#fff" />
                            ) : (
                                <IoMdClose size={24} color="#fff" />
                            )}
                        </div>

                        <ul
                            className={`${
                                open ? "block" : "hidden"
                            } bg-base-100 opacity-95 text-2xl shadow-2xl fixed w-screen h-screen left-0 right-0 top-0  flex flex-col justify-center items-center   rounded-xl    z-40  overflow-hidden gap-3 `}
                        >
                            {menuItems.map((item) => (
                                <li key={item.id} className="hover:bg-accent">
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                            <GetInTouch />
                        </ul>
                    </div>
                </div>
                {/* Mobile Nav */}
            </div>
        </div>
    );
};

export default Navbar;
