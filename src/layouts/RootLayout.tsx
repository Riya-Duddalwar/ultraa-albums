import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { BackToTop } from '../components/common/BackToTop';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};
