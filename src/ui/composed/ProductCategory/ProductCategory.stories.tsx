import type { Meta, StoryObj } from '@storybook/react';
import { ProductCategory } from './ProductCategory';

const meta: Meta<typeof ProductCategory> = {
  title: 'Molecules/ProductCategory',
  component: ProductCategory,
};

export default meta;
type Story = StoryObj<typeof ProductCategory>;

export const Default: Story = {
  args: {
    username: 'store_user',
  },
};
