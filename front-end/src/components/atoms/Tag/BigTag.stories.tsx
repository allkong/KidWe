import type {Meta, StoryObj} from '@storybook/react';
import BigTag from '@/components/atoms/Tag/BigTag';

const meta: Meta<typeof BigTag> = {
  component: BigTag,
};
export default meta;

type Story = StoryObj<typeof BigTag>;

export const Default: Story = {
  args: {},
};

export const DeepGreen: Story = {
  args: {
    variant: 'deepGreen',
  },
};
