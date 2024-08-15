import type {Meta, StoryObj} from '@storybook/react';
import RadioCheckBoxButton from '@/components/atoms/CheckBox/RadioCheckBoxButton';

const meta: Meta<typeof RadioCheckBoxButton> = {
  component: RadioCheckBoxButton,
};
export default meta;

type Story = StoryObj<typeof RadioCheckBoxButton>;

export const Default: Story = {
  args: {
    options: ['실온', '냉장'],
    onChange: () => {},
  },
};
