import type { Meta, StoryObj } from '@storybook/react';
import { BackButton } from './BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'Atoms/BackButton',
  component: BackButton,
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {};
