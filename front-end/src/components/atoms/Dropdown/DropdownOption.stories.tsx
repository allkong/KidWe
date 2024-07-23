import type {Meta, StoryObj} from '@storybook/react';
import DropdownOption from '@/components/atoms/Dropdown/DropdownOption';

const meta: Meta<typeof DropdownOption> = {
  component: DropdownOption,
};
export default meta;

type Story = StoryObj<typeof DropdownOption>;

export const Function: Story = {
  args: {
    text: 'alert',
    onClick: () => {
      window.alert();
    },
  },
};
