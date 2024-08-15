import type {Meta, StoryObj} from '@storybook/react';
import Option from '@/components/atoms/Option/Option';

const meta: Meta<typeof Option> = {
  component: Option,
};
export default meta;

type Story = StoryObj<typeof Option>;

export const Function: Story = {
  args: {
    text: 'alert',
    onClick: () => {
      window.alert();
    },
  },
};
