import React from 'react';
import { LogoIcon } from './icons/LogoIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4B5548] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <LogoIcon className="h-8 w-8 text-white" />
              <span className="font-serif text-2xl font-bold">Wanderlust</span>
            </a>
            <p className="text-gray-300">Curated stays for the modern traveler.</p>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-gray-300">Gift Cards</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Journal</a></li>
              <li><a href="#" className="hover:underline text-gray-300">For Hosts</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* Add social icons here */}
              <a href="#" className="text-gray-300 hover:text-white">Social 1</a>
              <a href="#" className="text-gray-300 hover:text-white">Social 2</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Wanderlust Stays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
