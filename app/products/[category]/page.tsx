import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products, categories } from '@/data/products'

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }))
}

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const category = categories.find((c) => c.id === params.category)
  if (!category) {
    notFound()
  }

  const categoryProducts = products.filter((p) => p.category === params.category)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/products" className="text-blue-600 hover:text-blue-800">
          ← Back to Products
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${params.category}/${product.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 line-clamp-2">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 