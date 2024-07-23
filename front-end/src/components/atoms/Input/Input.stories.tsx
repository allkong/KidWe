import type {Meta, StoryObj} from '@storybook/react';
import Input from '@/components/atoms/Input/Input';

const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: 'input',
    onChange: () => window.alert(),
    placeholder: 'placeholder test',
  },
};
