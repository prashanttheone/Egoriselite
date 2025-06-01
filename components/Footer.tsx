'use client'

import React from 'react'
import Link from 'next/link'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'Instagram', href: '#', icon: '📸' },
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Egorise</h3>
            <p className="text-gray-400">
              Leading manufacturer of premium home appliances and electronics in Delhi NCR.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong>Delhi Office:</strong><br />
                123 Electronics Park,<br />
                Sector 62, Noida,<br />
                Uttar Pradesh 201301
              </p>
              <p className="text-gray-400">
                <strong>Phone:</strong> +91 98765 43210<br />
                <strong>Email:</strong> info@egorise.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/refrigerators" className="text-gray-400 hover:text-white transition-colors">
                  Refrigerators
                </Link>
              </li>
              <li>
                <Link href="/products/washing-machines" className="text-gray-400 hover:text-white transition-colors">
                  Washing Machines
                </Link>
              </li>
              <li>
                <Link href="/products/televisions" className="text-gray-400 hover:text-white transition-colors">
                  Televisions
                </Link>
              </li>
              <li>
                <Link href="/products/air-coolers" className="text-gray-400 hover:text-white transition-colors">
                  Air Coolers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full gradient-button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Egorise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 