import type {Meta, StoryObj} from '@storybook/react';
import Header from '@/components/organisms/Header/Header';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;
export const Default: Story = {};
