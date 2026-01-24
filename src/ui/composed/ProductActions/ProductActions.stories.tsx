import type { Meta, StoryObj } from '@storybook/react';
import { ProductActions } from './ProductActions';

const meta: Meta<typeof ProductActions> = {
  title: 'Molecules/ProductActions',
  component: ProductActions,
};

export default meta;
type Story = StoryObj<typeof ProductActions>;

export const Default: Story = {
  args: {
    onCommentClick: () => console.log('Comment clicked'),
  },
};
