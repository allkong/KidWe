import type {Meta, StoryObj} from '@storybook/react';
import DropdownMain from '@/components/atoms/Dropdown/DropdownMain';

const meta: Meta<typeof DropdownMain> = {
  component: DropdownMain,
};

export default meta;

type Story = StoryObj<typeof DropdownMain>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
