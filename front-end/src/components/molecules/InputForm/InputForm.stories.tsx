import type {Meta, StoryObj} from '@storybook/react';
import InputForm from '@/components/molecules/InputForm/InputForm';

const meta: Meta<typeof InputForm> = {
  component: InputForm,
};
export default meta;

type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
  args: {
    value: 'input',
    placeholder: 'placeholder',
    label: '입력',
  },
};
