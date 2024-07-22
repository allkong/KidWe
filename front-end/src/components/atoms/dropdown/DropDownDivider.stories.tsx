import type {Meta, StoryObj} from '@storybook/react';
import DropDownDivider from './DropDownDivider';

const meta: Meta<typeof DropDownDivider> = {
  component: DropDownDivider,
};
export default meta;

type Story = StoryObj<typeof DropDownDivider>;

export const Default: Story = {
  args: {},
};
