import type {Meta, StoryObj} from '@storybook/react';
import SignUpMain from '@/pages/sign-up/SignUpMain';

const meta: Meta<typeof SignUpMain> = {
  component: SignUpMain,
};

export default meta;

type Story = StoryObj<typeof SignUpMain>;

export const Default: Story = {
  args: {},
};
