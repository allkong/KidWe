import type {Meta, StoryObj} from '@storybook/react';
import Register from '@/pages/SignUp/Register';

const meta: Meta<typeof Register> = {
  component: Register,
};

export default meta;

type Story = StoryObj<typeof Register>;

export const Default: Story = {
  args: {},
};
