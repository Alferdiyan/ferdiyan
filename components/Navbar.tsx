import Image from 'next/image';

import React, { useState } from 'react';
import GetInTouch from './button/GetInTouch';
import ResponsiveNavLink from './ResponsiveNavLink';

const Navbar = () => {
  const [menuItems] = useState([
    { id: 1, name: 'Home', link: '#' },
    { id: 2, name: 'About', link: '#' },
    { id: 3, name: 'Services', link: '#' },
    { id: 4, name: 'Portfolio', link: '#' },
  ]);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-20 text-white mt-4 px-10">
      {/* Desktop Nav */}
      {/* <div className="hidden md:flex md:justify-between items-center"> */}
      <div className="justify-between hidden md:flex">
        {/* Nav Menu */}
        <a href="#" className="font-">
          Ferdiyan
        </a>

        <ul className={`flex gap-4 justify-center  items-center`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <GetInTouch />
        </ul>
      </div>
      {/* Desktop Nav */}

      {/* Mobile Nav */}
      <div className="flex justify-between items-center md:hidden mb-10">
        <div>
          {/* <Image src="/logo1.svg" alt="logo" width={50} height={50} /> */}
          <a href="#" className="font-semibold">
            Ferdiyan
          </a>
        </div>
        <GetInTouch />

        <div>
          <div onClick={() => setOpen(false)} className={`${open ? 'block' : 'hidden'} bg-transparent absolute w-full h-full inset-0`}></div>
          <button onClick={() => setOpen((open) => !open)} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
          {/* <ul className={`${open ? 'block' : 'hidden'} bg-white absolute right-0 mr-10 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden`}> */}
          <ul className={`${open ? 'block' : 'hidden'} bg-white absolute right-0 mr-20 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden`}>
            <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Our menu</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Dessert</ResponsiveNavLink>
            <ResponsiveNavLink href="#">About Us</ResponsiveNavLink>
            <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
          </ul>
        </div>
      </div>
      {/* Mobile Nav */}
    </nav>
  );
};

export default Navbar;
