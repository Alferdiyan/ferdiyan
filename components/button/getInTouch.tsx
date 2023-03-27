import Link from 'next/link';
import React from 'react';

export default function GetInTouch() {
  return (
    <div className="border  px-4 py-2 rounded-full hover:bg-orange-400">
      <Link href="#">
        <button>Get In Touch</button>
      </Link>
    </div>
  );
}
