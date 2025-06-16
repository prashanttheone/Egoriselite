'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { products } from '@/data/products'
import Image from 'next/image'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) return <div className="p-4">Product not found.</div>

  return (
    <div className="p-6 max-w-7xl mx-auto mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Product Image */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl text-red-600 font-bold">₹{product.offerPrice}</span>
            <span className="text-gray-400 line-through text-lg">₹{product.price}</span>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Details</h2>
          <table className="table-auto w-full text-sm text-left border border-gray-200 mb-6">
            <tbody>
              {product.details.split(',').map((feature, index) => {
                const [key, ...rest] = feature.trim().split(':')
                const value = rest.join(':') || 'Yes'
                return (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-3 py-2 font-medium text-gray-700">{key}</td>
                    <td className="px-3 py-2 text-gray-600">{value}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
