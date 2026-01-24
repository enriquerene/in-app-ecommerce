import type { Meta, StoryObj } from '@storybook/react';
import { ProductFeed } from './ProductFeed';
import { MOCK_PRODUCTS } from '../constants';

const meta: Meta<typeof ProductFeed> = {
  title: 'Catalog/ProductFeed',
  component: ProductFeed,
};

export default meta;
type Story = StoryObj<typeof ProductFeed>;

export const Default: Story = {
  args: {
    products: MOCK_PRODUCTS,
  },
};
