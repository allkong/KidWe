import type {Meta, StoryObj} from '@storybook/react';
import SignUpMain from './SignUpMain';

const meta: Meta<typeof SignUpMain> = {
  component: SignUpMain,
};

export default meta;

type Story = StoryObj<typeof SignUpMain>;

export const Default: Story = {
  args: {},
};
