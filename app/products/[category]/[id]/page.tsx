// app/products/[category]/[id]/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // Optional: to force fresh fetch per request

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store', // or 'force-cache' if desired
  });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function ProductDetailPage({
  params,
}: {
  params: { category: string; id: string };
}) {
  const { category, id } = params;
  const allProducts = await getProducts();
  const productsInCategory = allProducts.filter(
    (p: any) => p.category === category
  );
  const product = productsInCategory.find((p: any) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <Link href="/products" className="gradient-button">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            ₹{product.price}
          </p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="section-title text-center mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsInCategory
            .filter((p: any) => p.id !== id)
            .slice(0, 3)
            .map((relatedProduct: any) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.category}/${relatedProduct.id}`}
                className="card group"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={relatedProduct.imageUrl}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {relatedProduct.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{relatedProduct.price}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
