import type { Meta, StoryObj } from '@storybook/react';
import { InstagramProfile } from './InstagramProfile';

const meta: Meta<typeof InstagramProfile> = {
  title: 'Molecules/InstagramProfile',
  component: InstagramProfile,
};

export default meta;
type Story = StoryObj<typeof InstagramProfile>;

export const Default: Story = {};
