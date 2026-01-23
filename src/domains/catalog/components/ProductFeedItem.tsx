"use client";

import React, { useState } from 'react';
import { Product } from '@/src/core/types/product';
import { Icon } from '@/src/ui/base/Icon';
import { CommentSheet } from './CommentSheet';

interface ProductFeedItemProps {
  product: Product;
}

export const ProductFeedItem: React.FC<ProductFeedItemProps> = ({ product }) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  return (
    <div id={`product-${product.id}`} className="flex flex-col border-b border-zinc-100 dark:border-zinc-900 pb-4 scroll-mt-14">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5">
            <div className="w-full h-full rounded-full bg-white dark:bg-black p-0.5">
              <div className="w-full h-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
          <span className="text-sm font-semibold">store_user_{product.id}</span>
        </div>
        <Icon name="more" size={20} />
      </div>

      {/* Image */}
      <div className="aspect-square relative w-full bg-zinc-100 dark:bg-zinc-900">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col p-3 gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <Icon name="heart" size={26} />
            </button>
            <button 
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsCommentsOpen(true)}
            >
              <Icon name="comment" size={26} />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <Icon name="send" size={26} />
            </button>
          </div>
          <button className="hover:opacity-70 transition-opacity">
            <Icon name="bookmark" size={26} />
          </button>
        </div>

        {/* Likes */}
        <div className="text-sm font-semibold">
          {10 + (parseInt(product.id) * 123) % 900} likes
        </div>

        {/* Product Info */}
        <div className="text-sm">
          <span className="font-semibold mr-2">store_user_{product.id}</span>
          <span className="font-bold">{product.name}</span> - ${product.price.toLocaleString()}
        </div>

        {/* Comments */}
        <div 
          className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => setIsCommentsOpen(true)}
        >
          View all {2 + (parseInt(product.id) * 7) % 50} comments
        </div>

        <div className="text-[10px] text-zinc-400 uppercase mt-1">
          {1 + (parseInt(product.id) * 3) % 23} hours ago
        </div>
      </div>

      <CommentSheet 
        isOpen={isCommentsOpen} 
        onClose={() => setIsCommentsOpen(false)} 
        productName={product.name}
      />
    </div>
  );
};
