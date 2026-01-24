import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    iconName: 'heart',
  },
};

export const CustomSize: Story = {
  args: {
    iconName: 'search',
    iconSize: 32,
  },
};
