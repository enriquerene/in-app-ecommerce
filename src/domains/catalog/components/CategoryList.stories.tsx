import type { Meta, StoryObj } from '@storybook/react';
import { CategoryList } from './CategoryList';
import { MOCK_CATEGORIES } from '../constants';

const meta: Meta<typeof CategoryList> = {
  title: 'Catalog/CategoryList',
  component: CategoryList,
};

export default meta;
type Story = StoryObj<typeof CategoryList>;

export const Default: Story = {
  args: {
    categories: MOCK_CATEGORIES,
  },
};
