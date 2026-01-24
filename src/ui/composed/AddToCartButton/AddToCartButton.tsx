import React from 'react';
import { IconButton } from '@/src/ui/base';

interface AddToCartButtonProps {
  onClick?: () => void;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return <IconButton iconName="shopping-bag" onClick={onClick} />;
};
