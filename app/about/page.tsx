import Image from 'next/image';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Priya Sharma',
    position: 'Head of Innovation',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Amit Patel',
    position: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Neha Gupta',
    position: 'Customer Relations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            alt="Modern office interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Egorise</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Leading the future of home appliances with innovation and quality
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Egorise has grown from a small manufacturing unit in Delhi to one of India's leading home appliance manufacturers. Our journey has been driven by a passion for innovation and a commitment to quality.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we operate state-of-the-art manufacturing facilities in Noida, producing a wide range of premium home appliances that combine cutting-edge technology with elegant design.
            </p>
            <p className="text-gray-600">
              Our commitment to sustainability and customer satisfaction has made us a trusted name in the industry, serving millions of happy customers across India.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=800&q=80"
              alt="Manufacturing facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly pushing boundaries to create smarter, more efficient appliances
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Uncompromising standards in every product we manufacture
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Eco-friendly manufacturing and energy-efficient products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 