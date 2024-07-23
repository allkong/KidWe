import type {Meta, StoryObj} from '@storybook/react';
import Checkbox from '@/components/atoms/Box/CheckBox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: '찬성',
  },
};
