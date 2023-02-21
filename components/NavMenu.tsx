import React from 'react';
import Link from 'next/link';

export default function NavMenu({ href, children }) {
  return (
    <div>
      <a href={href}>
        <button className="heroButton gap-x-1 hover:text-orange-400">{children}</button>
      </a>
    </div>
  );
}
