import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSlider from '../components/TestimonialsSlider'
import EnquirySection from '../components/EnquirySection'
import ContactSection from '../components/ContactSection'
import Image from 'next/image'
import ProductImage from '../components/ProductImage'

const featuredProducts = [
  {
    id: 1,
    name: 'Smart Refrigerator',
    description: 'AI-powered refrigerator with smart temperature control',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
    category: 'refrigerators',
  },
  {
    id: 2,
    name: 'Front Load Washing Machine',
    description: 'Energy-efficient washing machine with multiple wash programs',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    category: 'washing-machines',
  },
  {
    id: 3,
    name: '4K Smart TV',
    description: 'Ultra HD smart TV with voice control and streaming apps',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    category: 'televisions',
  },
  {
    id: 4,
    name: 'Smart Air Cooler',
    description: 'IoT-enabled air cooler with remote control and scheduling',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=800&q=80',
    category: 'air-coolers',
  },
]

const features = [
  {
    title: 'Quality Assurance',
    description: 'ISO 9001:2015 certified manufacturing with rigorous quality checks',
    icon: '🏆',
  },
  {
    title: 'Innovation',
    description: 'R&D center with cutting-edge technology and smart features',
    icon: '💡',
  },
  {
    title: 'Customer Support',
    description: '24/7 customer support with nationwide service network',
    icon: '🤝',
  },
  {
    title: 'Sustainability',
    description: 'Eco-friendly manufacturing with energy-efficient products',
    icon: '🌱',
  },
]

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1920&q=80"
            alt="Modern home interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Home Appliances for Modern Living
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Experience innovation and quality with our range of smart home appliances
            </p>
            <Link href="/products" className="gradient-button">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="card group">
              <div className="relative h-48 mb-4">
                <ProductImage
                  src={product.image}
                  alt={product.name}
                  className="h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link
                href={`/products/${product.category}`}
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Why Choose Egorise?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Experience the perfect blend of innovation, quality, and style with our premium home appliances.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
} 