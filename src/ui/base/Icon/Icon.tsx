import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';
import { IconProps } from './Icon.types';

const iconMap: Record<string, string> = {
  cart: 'lucide:shopping-cart',
  'shopping-bag': 'lucide:handbag',
  user: 'lucide:user',
  search: 'lucide:search',
  'chevron-right': 'lucide:chevron-right',
  plus: 'lucide:plus',
  minus: 'lucide:minus',
  heart: 'lucide:heart',
  comment: 'lucide:message-circle',
  send: 'lucide:send',
  bookmark: 'lucide:bookmark',
  more: 'lucide:more-horizontal',
  'arrow-left': 'lucide:arrow-left',
  home: 'lucide:home',
  'plus-square': 'lucide:plus-square',
  x: 'lucide:x',
  instagram: 'lucide:instagram',
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
