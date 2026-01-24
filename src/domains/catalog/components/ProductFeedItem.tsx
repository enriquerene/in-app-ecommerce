"use client";

import React, { useState } from 'react';
import { Product } from '@/src/core/types/product';
import { 
  ProductHeader, 
  ProductCategory, 
  ProductOptions, 
  ProductActions
} from '@/src/ui/composed';
import { 
  ProductImage, 
  LikesDisplay, 
  ProductInfo, 
  CommentsToggler 
} from '@/src/ui/base';
import { CommentSheet } from './CommentSheet';

interface ProductFeedItemProps {
  product: Product;
}

export const ProductFeedItem: React.FC<ProductFeedItemProps> = ({ product }) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const seed = React.useMemo(() => {
    let s = 0;
    for (let i = 0; i < product.id.length; i++) {
      s += product.id.charCodeAt(i);
    }
    return s;
  }, [product.id]);

  const username = `store_user_${seed % 1000}`;

  return (
    <div id={`product-${product.id}`} className="flex flex-col border-b border-zinc-100 dark:border-zinc-900 pb-4 scroll-mt-14">
      
      <ProductHeader>
        <ProductCategory username={username} />
        <ProductOptions />
      </ProductHeader>

      <ProductImage src={product.imageUrl} alt={product.name} />

      <div className="flex flex-col p-3 gap-2">
        <ProductActions onCommentClick={() => setIsCommentsOpen(true)} />

        <LikesDisplay count={10 + (seed * 123) % 900} />

        <ProductInfo name={product.name} price={product.price} />

        <CommentsToggler
          count={2 + (seed * 7) % 50} 
          onClick={() => setIsCommentsOpen(true)} 
        />
      </div>

      <CommentSheet 
        isOpen={isCommentsOpen} 
        onClose={() => setIsCommentsOpen(false)} 
        productName={product.name}
      />
    </div>
  );
};
