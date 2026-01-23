import React from 'react';
import { Product } from '@/src/core/types/product';
import { ProductFeedItem } from './ProductFeedItem';

interface ProductFeedProps {
  products: Product[];
}

export const ProductFeed: React.FC<ProductFeedProps> = ({ products }) => {
  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <ProductFeedItem key={product.id} product={product} />
      ))}
    </div>
  );
};
