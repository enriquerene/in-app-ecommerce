import type { Meta, StoryObj } from '@storybook/react';
import { CommentsButton } from './CommentsButton';

const meta: Meta<typeof CommentsButton> = {
  title: 'Molecules/CommentsButton',
  component: CommentsButton,
};

export default meta;
type Story = StoryObj<typeof CommentsButton>;

export const Default: Story = {};
