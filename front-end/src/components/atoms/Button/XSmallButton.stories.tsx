import type {Meta, StoryObj} from '@storybook/react';
import XSmallButton from '@/components/atoms/Button/XSmallButton';

const meta: Meta<typeof XSmallButton> = {
  component: XSmallButton,
};

export default meta;

type Story = StoryObj<typeof XSmallButton>;

export const Default: Story = {
  args: {
    variant: 'negative',
    label: '취소',
  },
};
