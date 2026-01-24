import React from 'react';
import { IconButton } from '@/src/ui/base';

interface ShareButtonProps {
  onClick?: () => void;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ onClick }) => {
  return <IconButton iconName="send" onClick={onClick} />;
};
