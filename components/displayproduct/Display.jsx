'use client'

import React, { useState } from 'react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function Display() {
  // const [selectedCategory, setSelectedCategory] = useState('All')
  // const categories = ['All', ...new Set(products.map(p => p.category))]
  // const filteredProducts =
  //   selectedCategory === 'All'
  //     ? products
  //     : products.filter(p => p.category === selectedCategory)

  const filteredProducts = products // Show all products for now

  return (
  <div className="bg-gradient-to-br from-blue-900 via-gray-700 to-purple-700 min-h-screen py-20 px-4">

      <h1 className="text-2xl font-bold mb-4">Latest Products</h1>

      {/* 
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
