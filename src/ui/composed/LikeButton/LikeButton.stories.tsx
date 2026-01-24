import type { Meta, StoryObj } from '@storybook/react';
import { LikeButton } from './LikeButton';

const meta: Meta<typeof LikeButton> = {
  title: 'Molecules/LikeButton',
  component: LikeButton,
};

export default meta;
type Story = StoryObj<typeof LikeButton>;

export const Default: Story = {};
