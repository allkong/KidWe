import type {Meta, StoryObj} from '@storybook/react';
import DropDown from '@/components/atoms/DropDown/DropDown';

const meta: Meta<typeof DropDown> = {
  component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

export const Default: Story = {
  args: {},
};
