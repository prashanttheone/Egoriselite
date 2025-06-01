export const products = [
  {
    id: '1',
    category: 'washing-machines',
    name: 'Front Load Washing Machine',
    description: 'Energy-efficient washing machine with multiple wash programs',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    features: [
      'Energy Star certified',
      'Multiple wash programs',
      'Smart connectivity',
      'Large capacity'
    ],
    specifications: {
      capacity: '8 kg',
      energyRating: 'A+++',
      dimensions: '85 x 60 x 60 cm',
      warranty: '2 years'
    }
  },
  {
    id: '2',
    category: 'televisions',
    name: '4K Smart TV',
    description: 'Ultra HD smart TV with voice control and streaming apps',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    features: [
      '4K Ultra HD resolution',
      'Smart TV capabilities',
      'Voice control',
      'Multiple HDMI ports'
    ],
    specifications: {
      screenSize: '55 inch',
      resolution: '3840 x 2160',
      refreshRate: '120 Hz',
      warranty: '3 years'
    }
  },
  {
    id: '3',
    category: 'air-coolers',
    name: 'Smart Air Cooler',
    description: 'IoT-enabled air cooler with remote control and scheduling',
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=800&q=80',
    features: [
      'Smart connectivity',
      'Energy efficient',
      'Remote control',
      'Timer function'
    ],
    specifications: {
      capacity: '40L',
      powerConsumption: '65W',
      coverage: '300 sq ft',
      warranty: '1 year'
    }
  }
]

export const categories = [
  {
    id: 'washing-machines',
    name: 'Washing Machines',
    description: 'Energy-efficient washing machines for modern homes'
  },
  {
    id: 'televisions',
    name: 'Televisions',
    description: 'Smart TVs with stunning picture quality'
  },
  {
    id: 'air-coolers',
    name: 'Air Coolers',
    description: 'Smart air coolers for comfortable living'
  }
] 