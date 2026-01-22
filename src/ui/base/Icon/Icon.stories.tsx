import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name (mapped name or Iconify name)',
    },
    size: {
      control: 'number',
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'cart',
    size: 24,
  },
};

export const MappedIcons: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Icon {...args} name="cart" />
      <Icon {...args} name="user" />
      <Icon {...args} name="search" />
      <Icon {...args} name="chevron-right" />
      <Icon {...args} name="plus" />
      <Icon {...args} name="minus" />
    </div>
  ),
};

export const IconifyLibrary: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <span className="w-32 text-sm">Material Design:</span>
        <Icon {...args} name="mdi:home" />
        <Icon {...args} name="mdi:account" />
        <Icon {...args} name="mdi:settings" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-32 text-sm">Phosphor:</span>
        <Icon {...args} name="ph:heart-fill" />
        <Icon {...args} name="ph:bicycle" />
        <Icon {...args} name="ph:camera" />
      </div>
      <div className="flex gap-4 items-center">
        <span className="w-32 text-sm">Lucide (Direct):</span>
        <Icon {...args} name="lucide:ghost" />
        <Icon {...args} name="lucide:flame" />
        <Icon {...args} name="lucide:zap" />
      </div>
    </div>
  ),
};

export const CustomColor: Story = {
  args: {
    name: 'ph:heart-fill',
    size: 48,
    color: '#ff0000',
  },
};
