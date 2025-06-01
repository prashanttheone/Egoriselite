'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { motion } from 'framer-motion'

interface Product {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
  category: string
}

// Dummy products data
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Premium Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    imageUrl: "https://picsum.photos/seed/headphones/400/300",
    category: "Electronics"
  },
  {
    id: 2,
    title: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    price: 299.99,
    imageUrl: "https://picsum.photos/seed/watch/400/300",
    category: "Electronics"
  },
  {
    id: 3,
    title: "Designer Backpack",
    description: "Stylish and durable backpack for everyday use",
    price: 89.99,
    imageUrl: "https://picsum.photos/seed/backpack/400/300",
    category: "Fashion"
  }
]

export default function AdminDashboard() {
  const { data: session } = useSession()
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>(dummyProducts)
  const [isLoading, setIsLoading] = useState(false)

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  if (!session) {
    router.push('/admin/login')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => router.push('/admin/products/new')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Add New Product
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          {isLoading ? (
            <div className="text-center py-4">Loading...</div>
          ) : products.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No products found. Add your first product!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg p-4"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="object-cover rounded-md w-full h-48"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${product.price}</span>
                    <div className="space-x-2">
                      <button
                        onClick={() => router.push(`/admin/products/${product.id}/edit`)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 