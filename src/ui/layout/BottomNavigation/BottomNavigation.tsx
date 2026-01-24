import React from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@/src/ui/base/Icon';

export const BottomNavigation: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 flex justify-around py-3 px-4">
      <Icon name="home" size={26} className="cursor-pointer" onClick={() => router.push('/')} />
      <Icon name="search" size={26} />
      <Icon name="plus-square" size={26} />
      <Icon name="heart" size={26} />
      <Icon name="user" size={26} />
    </nav>
  );
};
