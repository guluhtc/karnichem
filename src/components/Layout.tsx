import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import useScrollToTop from '../hooks/useScrollToTop';

const Layout: React.FC = () => {
  // Automatically scroll to top when route changes
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;