import React from 'react';

interface AvatarProps {
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className = "" }) => {
  return (
    <div className={`w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5 ${className}`}>
      <div className="w-full h-full rounded-full bg-white dark:bg-black p-0.5">
        <div className="w-full h-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </div>
  );
};
