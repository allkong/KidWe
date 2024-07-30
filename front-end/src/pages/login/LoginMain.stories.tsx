import type {Meta, StoryObj} from '@storybook/react';
import LoginMain from '@/pages/login/LoginMain';

const meta: Meta<typeof LoginMain> = {
  component: LoginMain,
};

export default meta;

type Story = StoryObj<typeof LoginMain>;

export const Default: Story = {
  args: {},
};
