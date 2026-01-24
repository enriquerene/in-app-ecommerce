import type { Meta, StoryObj } from '@storybook/react';
import { CommentsToggler } from './CommentsToggler';

const meta: Meta<typeof CommentsToggler> = {
  title: 'Atoms/CommentsToggler',
  component: CommentsToggler,
};

export default meta;
type Story = StoryObj<typeof CommentsToggler>;

export const Default: Story = {
  args: {
    count: 15,
  },
};
