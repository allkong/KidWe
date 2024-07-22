import type {Meta, StoryObj} from '@storybook/react';

import NavBar from '@/components/Organisms/NavBar';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
};
export default meta;

type Story = StoryObj<typeof NavBar>;

export const Basic: Story = {
  args: {
    text: 'basic',
  },
};
