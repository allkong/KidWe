import type {Meta, StoryObj} from '@storybook/react';
import LabelInput from '@/components/atoms/Input/LabelInput';

const meta: Meta<typeof LabelInput> = {
  component: LabelInput,
};
export default meta;

type Story = StoryObj<typeof LabelInput>;

export const Default: Story = {
  args: {
    label: '아이디',
    value: '아이디를 입력해주세요',
  },
};
