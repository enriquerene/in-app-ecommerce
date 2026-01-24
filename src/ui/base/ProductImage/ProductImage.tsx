import React from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`aspect-square relative w-full bg-zinc-100 dark:bg-zinc-900 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
