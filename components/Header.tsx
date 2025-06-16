'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <header className="bg-gradient-to-b from-blue-600 to-blue-300 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">Ego</span> <span className="text-2xl font-bold text-black">TechLife</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors font-bold text-xl">
              Home
            </Link>
            <Link href="/products" className="text-gray-800 hover:text-blue-600 transition-colors font-bold text-xl">
              Products
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors font-bold text-xl">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors font-bold text-xl">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">
                Home
              </Link>
              <Link href="/home" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">
                Products
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">
                About
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 