import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProductImage = ({ src, alt, className = '' }: ProductImageProps) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ProductImage; 