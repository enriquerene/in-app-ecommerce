import React from 'react';
import { IconButton } from '@/src/ui/base';

interface CommentsButtonProps {
  onClick?: () => void;
}

export const CommentsButton: React.FC<CommentsButtonProps> = ({ onClick }) => {
  return <IconButton iconName="comment" onClick={onClick} />;
};
