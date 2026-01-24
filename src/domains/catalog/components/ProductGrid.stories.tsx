import type { Meta, StoryObj } from '@storybook/react';
import { ProductGrid } from './ProductGrid';
import { MOCK_PRODUCTS } from '../constants';

const meta: Meta<typeof ProductGrid> = {
  title: 'Catalog/ProductGrid',
  component: ProductGrid,
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

export const Default: Story = {
  args: {
    products: MOCK_PRODUCTS,
  },
};
