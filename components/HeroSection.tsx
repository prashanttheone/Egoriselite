'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 bg-white opacity-10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Additional floating shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-white opacity-5 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-white opacity-5 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Discover Premium Products
            </motion.span>
            <motion.span
              className="block text-yellow-300 mt-2"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              For Your Lifestyle
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Explore our curated collection of high-quality products designed to enhance your daily life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/products"
                className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 inline-block"
              >
                Shop Now
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/categories"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition duration-300 inline-block"
              >
                Browse Categories
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '500+', label: 'Products' },
              { number: '24/7', label: 'Support' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    color: isHovered ? "#FCD34D" : "#FFFFFF"
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  className="text-white/80"
                  animate={{
                    opacity: isHovered ? 1 : 0.8
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 