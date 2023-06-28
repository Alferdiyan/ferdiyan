import React, { ReactNode } from 'react';
import Navbar from './Navbar';
// import { NextSeo } from 'next-seo';
import head from 'next/head';

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className="bg-[rgb(36,36,36)] border border-collapse">
      <head>
        <title>{title}</title>
      </head>
      <Navbar />
      <main>{children}</main>
      <footer>
        <div className="p-10 flex border-gray-100 justify-center">
          <h1>
            &copy; Copyright{' '}
            <strong>
              <span className="text-orange-500">Ferdiyan 2023</span>
            </strong>
            . All Rights Reserved
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
