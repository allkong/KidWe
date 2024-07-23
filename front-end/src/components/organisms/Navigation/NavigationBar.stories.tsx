import type {Meta, StoryObj} from '@storybook/react';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
};

export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const Basic: Story = {
  args: {
    text: 'basic',
  },
};
