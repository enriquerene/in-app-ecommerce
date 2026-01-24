import type { Meta, StoryObj } from '@storybook/react';
import { ProductInfo } from './ProductInfo';

const meta: Meta<typeof ProductInfo> = {
  title: 'Atoms/ProductInfo',
  component: ProductInfo,
};

export default meta;
type Story = StoryObj<typeof ProductInfo>;

export const Default: Story = {
  args: {
    name: 'Awesome T-Shirt',
    price: '$29.99',
  },
};
