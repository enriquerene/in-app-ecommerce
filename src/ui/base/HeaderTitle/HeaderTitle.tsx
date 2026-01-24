import React from "react";

export interface HeaderTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-lg font-bold ${className}`}>
      {children}
    </h1>
  );
};
