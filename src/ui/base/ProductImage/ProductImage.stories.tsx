import type { Meta, StoryObj } from '@storybook/react';
import { ProductImage } from './ProductImage';

const meta: Meta<typeof ProductImage> = {
  title: 'Atoms/ProductImage',
  component: ProductImage,
};

export default meta;
type Story = StoryObj<typeof ProductImage>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/id/100/400',
    alt: 'Product Name',
  },
};
