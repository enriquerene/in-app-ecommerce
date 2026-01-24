import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <h1 className={`text-xl font-bold tracking-tight italic ${className}`}>
      InstaShop
    </h1>
  );
};
