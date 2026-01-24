import React from 'react';

interface ProductHeaderProps {
  children: React.ReactNode;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-between p-3">
      {children}
    </div>
  );
};
