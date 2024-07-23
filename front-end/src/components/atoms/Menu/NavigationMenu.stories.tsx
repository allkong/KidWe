import type {StoryObj, Meta} from '@storybook/react';
import NavigationMenu from '@/components/atoms/menu/NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Home: Story = {
  args: {},
};
