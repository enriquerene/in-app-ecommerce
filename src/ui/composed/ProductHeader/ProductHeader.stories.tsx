import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProductHeader } from './ProductHeader';
import { ProductCategory } from '../ProductCategory';
import { ProductOptions } from '../ProductOptions';

const meta: Meta<typeof ProductHeader> = {
  title: 'Molecules/ProductHeader',
  component: ProductHeader,
};

export default meta;
type Story = StoryObj<typeof ProductHeader>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ProductCategory username="store_user" />
        <ProductOptions />
      </>
    ),
  },
};
