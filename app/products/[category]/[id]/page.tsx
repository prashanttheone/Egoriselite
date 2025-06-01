import Image from 'next/image';
import Link from 'next/link';

// Dummy product data
const products = {
  refrigerators: [
    {
      id: 1,
      name: 'Smart Frost-Free Refrigerator',
      price: '₹45,999',
      description: 'Experience the future of refrigeration with our Smart Frost-Free Refrigerator. Featuring advanced cooling technology, smart temperature control, and energy-efficient operation.',
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80',
      features: [
        'Smart Temperature Control',
        'Energy Efficient',
        'Frost Free',
        'LED Display',
        'Multi-Air Flow',
        'Holiday Mode'
      ],
      specifications: {
        capacity: '350L',
        color: 'Silver',
        dimensions: '70 x 75 x 175 cm',
        warranty: '2 Years',
        energyRating: '5 Star'
      }
    }
  ],
  'washing-machines': [
    {
      id: 2,
      name: 'Front Load Washing Machine',
      price: '₹32,999',
      description: 'Our Front Load Washing Machine combines efficiency with convenience. Multiple wash programs, quick wash options, and energy-saving features make laundry day a breeze.',
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
      features: [
        'Multiple Wash Programs',
        'Quick Wash',
        'Energy Saving',
        'Steam Wash',
        'Child Lock',
        'Delay Start'
      ],
      specifications: {
        capacity: '8kg',
        color: 'White',
        dimensions: '60 x 85 x 60 cm',
        warranty: '2 Years',
        energyRating: '4 Star'
      }
    }
  ],
  televisions: [
    {
      id: 3,
      name: '55" 4K Smart TV',
      price: '₹54,999',
      description: 'Immerse yourself in stunning visuals with our 55" 4K Smart TV. Crystal clear picture quality, smart features, and voice control make entertainment more engaging.',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
      features: [
        '4K Resolution',
        'Smart Features',
        'Voice Control',
        'HDR Support',
        'Multiple HDMI Ports',
        'Built-in WiFi'
      ],
      specifications: {
        screenSize: '55 inches',
        resolution: '3840 x 2160',
        refreshRate: '60Hz',
        warranty: '2 Years',
        ports: '4 HDMI, 2 USB'
      }
    }
  ],
  'air-coolers': [
    {
      id: 4,
      name: 'Smart Air Cooler',
      price: '₹24,999',
      description: 'Stay cool and comfortable with our Smart Air Cooler. Energy-efficient operation, smart control, and air purification features ensure a healthy and pleasant environment.',
      image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=800&q=80',
      features: [
        'Smart Control',
        'Energy Efficient',
        'Air Purification',
        'Auto Mode',
        'Sleep Mode',
        'Timer Function'
      ],
      specifications: {
        coverage: '400 sq ft',
        tankCapacity: '20L',
        powerConsumption: '65W',
        warranty: '2 Years',
        noiseLevel: '45dB'
      }
    }
  ]
};

export default function ProductDetailPage({ params }: { params: { category: string; id: string } }) {
  const category = params.category as keyof typeof products;
  const productId = parseInt(params.id);
  const product = products[category]?.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
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
        {/* Product Image */}
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-blue-600 mb-6">{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-blue-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <dt className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                    <dd className="font-medium text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="gradient-button flex-1">
              Add to Cart
            </button>
            <button className="outline-button flex-1">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="section-title text-center mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products[category].slice(0, 3).map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              href={`/products/${category}/${relatedProduct.id}`}
              className="card group"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{relatedProduct.name}</h3>
              <p className="text-2xl font-bold text-blue-600">{relatedProduct.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 