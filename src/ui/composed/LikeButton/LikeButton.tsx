import React from 'react';
import { IconButton } from '@/src/ui/base';

interface LikeButtonProps {
  onClick?: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ onClick }) => {
  return <IconButton iconName="heart" onClick={onClick} />;
};
