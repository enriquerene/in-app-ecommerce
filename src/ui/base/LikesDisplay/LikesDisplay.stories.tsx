import type { Meta, StoryObj } from '@storybook/react';
import { LikesDisplay } from './LikesDisplay';

const meta: Meta<typeof LikesDisplay> = {
  title: 'Atoms/LikesDisplay',
  component: LikesDisplay,
};

export default meta;
type Story = StoryObj<typeof LikesDisplay>;

export const Default: Story = {
  args: {
    count: 123,
  },
};
