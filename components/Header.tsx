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
<<<<<<< HEAD
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.jpg"
              alt="Egorise Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
              priority
            />
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Ego</span>
              <span className="text-2xl font-bold text-gray-800">TechLife</span>
            </div>
=======
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">Ego</span> <span className="text-2xl font-bold text-black-600">TechLife</span>
>>>>>>> d845708 (ego tech life)
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-800 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition-colors">
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
              <Link href="/products" className="text-gray-800 hover:text-blue-600 transition-colors px-4 py-2">
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