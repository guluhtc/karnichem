import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', anchor: '#home', color: 'hover:text-red-600' },
    { name: 'About Us', href: '/about', anchor: '#about', color: 'hover:text-green-600' },
    { name: 'Products', href: '/products', anchor: '#products', color: 'hover:text-red-600' },
    { name: 'Blog', href: '/blog', anchor: '#blog', color: 'hover:text-green-600' },
    { name: 'Testimonials', href: '/testimonials', anchor: '#testimonials', color: 'hover:text-red-600' },
    { name: 'Contact', href: '/contact', anchor: '#contact', color: 'hover:text-green-600' },
  ];

  const handleNavClick = (item: { name: string; href: string; anchor: string; color: string }) => {
    setIsMenuOpen(false);
    
    // If we're on the homepage, scroll to section
    if (location.pathname === '/') {
      const element = document.querySelector(item.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  const isActiveRoute = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Compact Top Bar */}
      <div className="hidden md:block bg-gray-900 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>+91 9414095827</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>karnichem@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span>ISO 9001:2015 Certified</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Main Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      } ${isScrolled ? 'lg:top-0' : 'lg:top-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 lg:h-16">
            {/* Compact Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
                <img 
                  src="/logo.png" 
                  alt="Shree Karni Chemicals Logo" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navigationItems.map((item) => (
                  location.pathname === '/' ? (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                        isActiveRoute(item.href)
                          ? 'text-gray-900 bg-gray-100' 
                          : `text-gray-700 ${item.color}`
                      } hover:bg-gray-50`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg ${
                        isActiveRoute(item.href)
                          ? 'text-gray-900 bg-gray-100' 
                          : `text-gray-700 ${item.color}`
                      } hover:bg-gray-50`}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-screen overflow-y-auto">
            <div className="px-4 py-6 space-y-1">
              {navigationItems.map((item) => (
                location.pathname === '/' ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-left px-4 py-4 text-lg font-medium transition-colors rounded-lg ${
                      isActiveRoute(item.href)
                        ? 'text-red-600 bg-red-50' 
                        : `text-gray-700 ${item.color}`
                    } hover:bg-gray-50 active:bg-gray-100`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-left px-4 py-4 text-lg font-medium transition-colors rounded-lg ${
                      isActiveRoute(item.href)
                        ? 'text-red-600 bg-red-50' 
                        : `text-gray-700 ${item.color}`
                    } hover:bg-gray-50 active:bg-gray-100`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <Link
                  to="/contact"
                  onClick={() => handleNavClick({ name: 'Contact', href: '/contact', anchor: '#contact', color: 'hover:text-green-600' })}
                  className="block w-full bg-red-600 hover:bg-red-700 text-white px-4 py-4 rounded-lg font-semibold transition-colors text-lg text-center"
                >
                  Get Quote
                </Link>
                
                {/* Mobile Contact Info */}
                <div className="pt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-4">
                    <a href="tel:+919414095827" className="flex items-center space-x-2 hover:text-red-600">
                      <Phone className="w-4 h-4" />
                      <span>Call Us</span>
                    </a>
                    <a href="mailto:karnichem@gmail.com" className="flex items-center space-x-2 hover:text-green-600">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;