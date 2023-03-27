import React, { useEffect, useState } from 'react';
import GetInTouch from './button/GetInTouch';

function NavScrolled() {
  const [menuItems] = useState([
    { id: 1, name: 'Home', link: '#' },
    { id: 2, name: 'About', link: '#' },
    { id: 3, name: 'Services', link: '#' },
    { id: 4, name: 'Contact', link: '#' },
  ]);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <nav style={{ transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%) ' }} className="px-2 pt-3 flex items-center justify-evenly z-100">
      <a href="#">Ferdiyan</a>
      <ul className={`flex gap-4 justify-center `}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <GetInTouch />
    </nav>
  );
}

export default NavScrolled;

// import React, { useState, useEffect } from 'react';

// function NavScrolled() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 right-0 z-100 bg-white shadow-md transition-all duration-500 ${isScrolled ? 'py-2' : 'py-5'} ${isScrolled ? 'opacity-100' : 'opacity-0'} `}>
//       <div className="container mx-auto px-4">
//         <a href="#" className="text-lg font-bold text-white hover:text-gray-100">
//           My Site
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default NavScrolled;
