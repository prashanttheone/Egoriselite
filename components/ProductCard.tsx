'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Product {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">${product.price}</span>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 