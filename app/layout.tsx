import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Egorise - Premium Home Appliances',
  description: 'Discover our range of premium home appliances designed for modern living.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <HeroSlider />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 