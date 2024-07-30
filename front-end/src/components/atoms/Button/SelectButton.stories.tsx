import type {Meta, StoryObj} from '@storybook/react';
import SelectButton from '@/components/atoms/Button/SelectButton';

const meta: Meta<typeof SelectButton> = {
  component: SelectButton,
};

export default meta;

type Story = StoryObj<typeof SelectButton>;

export const Default: Story = {
  args: {
    label: '서울특별시',
  },
};
