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
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%) ' }} className="px-2 pt-3 hidden md:flex items-center justify-evenly z-100">
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
