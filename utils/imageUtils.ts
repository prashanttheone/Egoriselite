import { StaticImageData } from 'next/image';

export interface OptimizedImage {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const getOptimizedImage = (
  src: string | StaticImageData,
  alt: string,
  width?: number,
  height?: number,
  priority: boolean = false
): OptimizedImage => {
  return {
    src,
    alt,
    width: width || 800,
    height: height || 600,
    priority,
  };
};

export const getImageUrl = (path: string): string => {
  // If the path is already a full URL, return it
  if (path.startsWith('http')) {
    return path;
  }
  
  // Otherwise, return the local path
  return `/images/${path}`;
}; 