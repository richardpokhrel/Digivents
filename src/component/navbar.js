import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ IMPORT Link
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../img/logo_wh.svg';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
   
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#510a3d] backdrop-blur-sm font-['Hanken_Grotesk',sans-serif] mb-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-20 relative z-10">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Artech Logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-pink-500 px-3 py-2 rounded-md text-lg font-medium tracking-wide transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-pink-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-4 space-y-2 rounded-lg mt-2 bg-[#510a3d]/80 backdrop-blur-sm">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-pink-500 hover:bg-[#510a3d]/50 block px-4 py-3 rounded-xl text-lg font-medium tracking-wide transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label={`Navigate to ${item.name}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
