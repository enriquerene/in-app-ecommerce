import React from 'react';

interface LikesDisplayProps {
  count: number;
  className?: string;
}

export const LikesDisplay: React.FC<LikesDisplayProps> = ({ count, className = "" }) => {
  return (
    <div className={`text-sm font-semibold ${className}`}>
      {count} likes
    </div>
  );
};
