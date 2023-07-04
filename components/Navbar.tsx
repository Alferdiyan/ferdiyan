'use client';

import Image from 'next/image';

import React, { useState } from 'react';
import GetInTouch from './button/GetInTouch';
import ResponsiveNavLink from './ResponsiveNavLink';
import Logo from '@/public/ferdiyan.svg';

const Navbar = () => {
  const [menuItems] = useState([
    { id: 2, name: 'About', link: '#' },
    { id: 3, name: 'Service', link: '#' },
    { id: 4, name: 'Portfolio', link: '#' },
    { id: 5, name: 'Driblle', link: 'https://dribbble.com/FerdiyanDSIGN' },
    { id: 6, name: 'Behance', link: 'https://www.behance.net/ferdiyanUI' },
  ]);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className=" bg-base-100 z-20 text-primary  py-4 ">
        {/* Desktop Nav */}
        {/* <div className="hidden md:flex md:justify-between items-center"> */}
        <div className="justify-between hidden md:flex">
          {/* Nav Menu */}

          <a
            href="/"
            className="flex gap-2 font-semibold hover:text-secondary text-3xl"
          >
            <Image src={Logo} alt="logo" width={40} height={40} />
            Ferdiyan
          </a>

          <ul className={`flex gap-4 justify-center   items-center`}>
            {menuItems.map((item) => (
              <li className="hover:text-secondary" key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
            <GetInTouch />
          </ul>
        </div>
        {/* Desktop Nav */}

        {/* Mobile Nav */}
        <div className="flex justify-between items-center md:hidden mb-10 ">
          <div>
            {/* <Image src="/logo1.svg" alt="logo" width={50} height={50} /> */}
            <a href="/" className="font-semibold ">
              Ferdiyan
            </a>
          </div>
          <GetInTouch />

          <div className="">
            <div
              onClick={() => setOpen(false)}
              className={`${
                open ? 'block' : 'hidden'
              } bg-transparent fixed inset-0 z-40 cursor`}
            ></div>
            <button
              onClick={() => setOpen((open) => !open)}
              className="focus:outline-none "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-primary w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
            <ul
              className={`${
                open ? 'block' : 'hidden'
              } bg-white absolute w-56 right-10   rounded-xl top-0 mt-16 my-2  z-50 px-7  `}
            >
              {menuItems.map((item) => (
                <li key={item.id} className="hover:bg-secondary">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              {/* <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Our menu</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Dessert</ResponsiveNavLink>
            <ResponsiveNavLink href="#">About Us</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Contact</ResponsiveNavLink> */}
            </ul>
          </div>
        </div>
        {/* Mobile Nav */}
      </nav>
    </div>
  );
};

export default Navbar;
