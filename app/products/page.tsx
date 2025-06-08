// app/products/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // So it fetches fresh data each time

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/productdata', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 mt-5">
      <h1 className="text-4xl font-bold text-center text-gray-900">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <Link
            key={product.id}
            href={`/products/${product.category}/${product.id}`}
            className="card group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-blue-600 font-bold text-lg mt-2">₹{product.price}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
  Get Details
</button>

          </Link>
        ))}
      </div>
    </div>
  );
}
