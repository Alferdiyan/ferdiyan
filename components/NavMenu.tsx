import React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavMenu({ href, children }: Props) {
  return (
    <div>
      <Link href={href}>
        <button className="heroButton gap-x-1 hover:text-orange-400">{children}</button>
      </Link>
    </div>
  );
}
