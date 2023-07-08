import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Eka Ferdiyanto | UI and Web Developer ',
  description: 'UI Web Designer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-base" data-theme="mytheme">
      <section className="px-5 sm:px-10 md:px-20">
        <Navbar />
        {children}
      </section>
      <Footer />
    </div>
  );
}
