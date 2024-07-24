import type {Meta, StoryObj} from '@storybook/react';
import CircleButton from '@/components/atoms/Button/CircleButton';

const meta: Meta<typeof CircleButton> = {
  component: CircleButton,
};

export default meta;

type Story = StoryObj<typeof CircleButton>;

export const Default: Story = {
  args: {
    label: '오늘',
    date: new Date(),
  },
};
