import React from 'react';
import { Icon } from '../Icon';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string;
  iconSize?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  iconName, 
  iconSize = 26, 
  className = "", 
  ...props 
}) => {
  return (
    <button 
      className={`hover:opacity-70 transition-opacity ${className}`}
      {...props}
    >
      <Icon name={iconName} size={iconSize} />
    </button>
  );
};
