import type { Meta, StoryObj } from '@storybook/react';
import { ProductFeedItem } from './ProductFeedItem';
import { MOCK_PRODUCTS } from '../constants';

const meta: Meta<typeof ProductFeedItem> = {
  title: 'Catalog/ProductFeedItem',
  component: ProductFeedItem,
};

export default meta;
type Story = StoryObj<typeof ProductFeedItem>;

export const Default: Story = {
  args: {
    product: MOCK_PRODUCTS[0],
  },
};
