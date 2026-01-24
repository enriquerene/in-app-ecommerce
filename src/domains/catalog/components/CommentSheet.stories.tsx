import type { Meta, StoryObj } from '@storybook/react';
import { CommentSheet } from './CommentSheet';

const meta: Meta<typeof CommentSheet> = {
  title: 'Catalog/CommentSheet',
  component: CommentSheet,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CommentSheet>;

export const Open: Story = {
  args: {
    isOpen: true,
    productName: 'Product Name',
    onClose: () => console.log('Close'),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    productName: 'Product Name',
    onClose: () => console.log('Close'),
  },
};
