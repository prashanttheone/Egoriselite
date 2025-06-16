import Image from 'next/image'
import ProductImage from '../components/ProductImage'
import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import TestimonialsSlider from '../components/TestimonialsSlider'
import EnquirySection from '../components/EnquirySection'
import ContactSection from '../components/ContactSection'
import Display from '@/components/displayproduct/Display'
const featuredProducts = [

  {
    id: 2,
    name: 'Front Load Washing Machine',
    description: 'Energy-efficient washing machine with multiple wash programs',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    category: 'washing-machines',
  },
  {
    id: 3,
    name: '4K Smart TV',
    description: 'Ultra HD smart TV with voice control and streaming apps',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    category: 'televisions',
  },
  {
    id: 4,
    name: 'Smart Air Cooler',
    description: 'IoT-enabled air cooler with remote control and scheduling',
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=800&q=80',
    category: 'air-coolers',
  },
]

const features = [
  {
    title: 'Quality Assurance',
    description: 'ISO 9001:2015 certified manufacturing with rigorous quality checks',
    icon: '🏆',
  },
  {
    title: 'Innovation',
    description: 'R&D center with cutting-edge technology and smart features',
    icon: '💡',
  },
  {
    title: 'Customer Support',
    description: '24/7 customer support with nationwide service network',
    icon: '🤝',
  },
  {
    title: 'Sustainability',
    description: 'Eco-friendly manufacturing with energy-efficient products',
    icon: '🌱',
  },
]

export default function Home() {
  return (
    <main>
      <HeroSlider />
         <Display />
      <AboutSection />
      {/* <TestimonialsSlider />*/}
      {/* <EnquirySection /> */}
      <ContactSection />
    </main>
  )
} 