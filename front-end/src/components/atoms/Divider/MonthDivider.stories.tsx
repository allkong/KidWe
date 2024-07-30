import type {Meta, StoryObj} from '@storybook/react';
import MonthDivider from '@/components/atoms/Divider/MonthDivider';

const meta: Meta<typeof MonthDivider> = {
  component: MonthDivider,
};
export default meta;

type Story = StoryObj<typeof MonthDivider>;

export const Default: Story = {
  args: {
    text: '2024년 7월',
    color: 'secondary',
  },
};
