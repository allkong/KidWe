import type {Meta, StoryObj} from '@storybook/react';
import DropdownDivider from '@/components/atoms/Dropdown/DropdownDivider';
import DropdownMain from '@/components/atoms/Dropdown/DropdownMain';
import DropdownOption from '@/components/atoms/Dropdown/DropdownOption';

const meta: Meta<typeof DropdownMain> = {
  component: DropdownMain,
};

export default meta;

type Story = StoryObj<typeof DropdownMain>;

export const Default: Story = {
  args: {
    children: [
      <DropdownOption text="test1" />,
      <DropdownDivider />,
      <DropdownOption text="test2" />,
      <DropdownOption text="test3" />,
    ],
  },
};
