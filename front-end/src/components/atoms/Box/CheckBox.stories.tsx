import type {Meta, StoryObj} from '@storybook/react';
import CheckBox from '@/components/atoms/Box/CheckBox';

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {},
};
