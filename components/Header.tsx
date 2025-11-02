import React, { useState, useEffect } from 'react';
import { LogoIcon } from './icons/LogoIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Stays', 'Experiences', 'Journal', 'Community', 'Work Mode'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <LogoIcon className="h-8 w-8 text-[#4B5548]" />
          <span className="font-serif text-2xl font-bold text-[#4B5548]">Wanderlust</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-gray-600 hover:text-[#4B5548] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <button className="hidden md:block bg-[#4B5548] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300">
          Sign In
        </button>
        <button className="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
