import Image from 'next/image';
import Link from 'next/link';

const productCategories = [
  {
    id: 2,
    name: 'Washing Machines',
    description: 'Front and top load washing machines with multiple programs',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    count: 6,
  },
  {
    id: 3,
    name: 'Televisions',
    description: '4K and 8K Smart TVs with stunning picture quality',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    count: 12,
  },
  {
    id: 4,
    name: 'Air Coolers',
    description: 'Energy-efficient air coolers for every space',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=800&q=80',
    count: 5,
  },
];

const featuredProducts = [
  {
    id: 2,
    name: 'Front Load Washing Machine',
    category: 'washing-machines',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    features: ['Multiple Wash Programs', 'Quick Wash', 'Energy Saving'],
  },
  {
    id: 3,
    name: '55" 4K Smart TV',
    category: 'televisions',
    price: '₹54,999',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    features: ['4K Resolution', 'Smart Features', 'Voice Control'],
  },
  {
    id: 4,
    name: 'Smart Air Cooler',
    category: 'air-coolers',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=800&q=80',
    features: ['Smart Control', 'Energy Efficient', 'Air Purification'],
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1920&q=80"
            alt="Modern home appliances"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover our range of premium home appliances
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 place-items-center">
        <h2 className="section-title text-center">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.name.toLowerCase()}`}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-2">{category.description}</p>
              <p className="text-blue-600 font-semibold">
                {category.count} Products →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card group">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products/${product.category}/${product.id}`}
                  className="gradient-button w-full text-center"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
            <p className="text-gray-600">
              Free delivery on all orders above ₹25,000
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Warrenty On Products</h3>
            <p className="text-gray-600">
              Extended warranty available on all products
            </p>
          </div>
          <div className="card text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">
              24/7 customer support and service
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 