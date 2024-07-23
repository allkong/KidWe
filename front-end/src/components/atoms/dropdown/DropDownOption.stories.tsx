import type {Meta, StoryObj} from '@storybook/react';
import DropDownOption from '@/components/atoms/DropDown/DropDownOption';

const meta: Meta<typeof DropDownOption> = {
  component: DropDownOption,
};
export default meta;

type Story = StoryObj<typeof DropDownOption>;

export const Function: Story = {
  args: {
    text: 'alert',
    onClick: () => {
      window.alert();
    },
  },
};
