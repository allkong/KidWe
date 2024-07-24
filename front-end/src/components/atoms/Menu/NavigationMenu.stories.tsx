import type {Meta, StoryObj} from '@storybook/react';
import NavigationMenu from '@/components/atoms/Menu/NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Home: Story = {
  args: {},
};
