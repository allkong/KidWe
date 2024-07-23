import type {Meta, StoryObj} from '@storybook/react';
import DropdownDivider from '@/components/atoms/Dropdown/DropdownDivider';

const meta: Meta<typeof DropdownDivider> = {
  component: DropdownDivider,
};
export default meta;

type Story = StoryObj<typeof DropdownDivider>;

export const Default: Story = {
  args: {},
};
