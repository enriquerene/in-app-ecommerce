import type { Meta, StoryObj } from '@storybook/react';
import { ProductOptions } from './ProductOptions';

const meta: Meta<typeof ProductOptions> = {
  title: 'Molecules/ProductOptions',
  component: ProductOptions,
};

export default meta;
type Story = StoryObj<typeof ProductOptions>;

export const Default: Story = {};
