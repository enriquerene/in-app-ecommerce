import React from 'react';
import { Avatar } from '@/src/ui/base';

interface ProductCategoryProps {
  username: string;
}

export const ProductCategory: React.FC<ProductCategoryProps> = ({ username }) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar />
      <span className="text-sm font-semibold">{username}</span>
    </div>
  );
};
