import React from 'react';

interface ProductInfoProps {
  name: string;
  price: string;
  className?: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ name, price, className = "" }) => {
  return (
    <div className={`text-sm ${className}`}>
      <span className="font-bold">{name}</span> - {price}
    </div>
  );
};
