import Link from 'next/link';
import React from 'react';

export default function getInTouch() {
  return (
    <Link href="#">
      <button className="border px-4 py-2 rounded-full hover:">Get In Touch</button>
    </Link>
  );
}
