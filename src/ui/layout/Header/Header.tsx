import React from "react";

export interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, className = "" }) => {
  return (
    <header className={`flex items-center px-4 py-3 border-b border-zinc-100 dark:border-zinc-900 sticky top-0 bg-white dark:bg-black z-10 ${className}`}>
      {children}
    </header>
  );
};
