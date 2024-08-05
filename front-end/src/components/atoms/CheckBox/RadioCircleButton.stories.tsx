import type {Meta, StoryObj} from '@storybook/react';
import RadioCircleButton from '@/components/atoms/CheckBox/RadioCircleButton';

const meta: Meta<typeof RadioCircleButton> = {
  component: RadioCircleButton,
};

export default meta;

type Story = StoryObj<typeof RadioCircleButton>;

export const Default: Story = {
  args: {
    options: [
      {
        label: '오늘',
        date: '7월 17일',
      },
      {
        label: '내일',
        date: '7월 18일',
      },
      {
        label: '모레',
        date: '7월 19일',
      },
    ],
  },
};
