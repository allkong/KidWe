import type {Meta, StoryObj} from '@storybook/react';
import TextArea from '@/components/atoms/Input/TextArea';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    value: 'textarea',
    onChange: () => window.alert(),
    placeholder: 'placeholder test',
  },
};
