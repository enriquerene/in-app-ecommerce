import React from 'react';
import { Icon } from '@/src/ui/base/Icon';

export const SearchBar: React.FC = () => {
  return (
    <div className="px-4 py-2">
      <div className="relative flex items-center w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl px-3 py-2">
        <Icon name="search" size={18} className="text-zinc-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="ml-2 bg-transparent border-none outline-none w-full text-sm text-zinc-800 dark:text-zinc-200"
        />
      </div>
    </div>
  );
};
