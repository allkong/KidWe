import type {Meta, StoryObj} from '@storybook/react';
import Button from '@/components/atoms/Button/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: '수락',
  },
};
