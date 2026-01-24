import type { Meta, StoryObj } from '@storybook/react';
import { AddToCartButton } from './AddToCartButton';

const meta: Meta<typeof AddToCartButton> = {
  title: 'Molecules/AddToCartButton',
  component: AddToCartButton,
};

export default meta;
type Story = StoryObj<typeof AddToCartButton>;

export const Default: Story = {};
