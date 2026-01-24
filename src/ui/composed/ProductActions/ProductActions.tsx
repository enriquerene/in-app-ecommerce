import React from 'react';
import { 
  LikeButton, 
  CommentsButton, 
  ShareButton, 
  AddToCartButton 
} from '../index';

interface ProductActionsProps {
  onCommentClick?: () => void;
  className?: string;
}

export const ProductActions: React.FC<ProductActionsProps> = ({ onCommentClick, className = "" }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-4">
        <LikeButton />
        <CommentsButton onClick={onCommentClick} />
        <ShareButton />
      </div>
      <AddToCartButton />
    </div>
  );
};
