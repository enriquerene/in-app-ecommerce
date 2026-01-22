import { IconProps as IconifyProps } from '@iconify/react';

export type IconName = string;

export interface IconProps extends Omit<IconifyProps, 'icon'> {
  name: IconName;
  size?: number | string;
}
