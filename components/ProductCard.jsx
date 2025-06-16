'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300"
    >
      <Link href={`/productCatelog/${product.id}`}>
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover rounded-t-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-1 line-clamp-2">
            {product.description}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            {product.details}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-red-600">Rs.{product.offerPrice}</span>
            <span className="text-sm line-through text-gray-400">Rs.{product.price}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
