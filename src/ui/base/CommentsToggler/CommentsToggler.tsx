import React from 'react';

interface CommentsTogglerProps {
  count: number;
  onClick?: () => void;
  className?: string;
}

export const CommentsToggler: React.FC<CommentsTogglerProps> = ({ count, onClick, className = "" }) => {
  return (
    <div 
      className={`text-sm text-zinc-500 dark:text-zinc-400 mt-1 cursor-pointer hover:opacity-70 transition-opacity ${className}`}
      onClick={onClick}
    >
      View all {count} comments
    </div>
  );
};
