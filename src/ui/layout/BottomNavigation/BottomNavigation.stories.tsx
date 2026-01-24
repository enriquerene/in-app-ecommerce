import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from './BottomNavigation';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Layout/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {};
