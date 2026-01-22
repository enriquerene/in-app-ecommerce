import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';
import { IconProps } from './Icon.types';

const iconMap: Record<string, string> = {
  cart: 'lucide:shopping-cart',
  user: 'lucide:user',
  search: 'lucide:search',
  'chevron-right': 'lucide:chevron-right',
  plus: 'lucide:plus',
  minus: 'lucide:minus',
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, className, color, ...props }) => {
  const iconName = iconMap[name] || name;

  return (
    <IconifyIcon
      icon={iconName}
      width={size}
      height={size}
      className={className}
      color={color}
      {...props}
    />
  );
};
