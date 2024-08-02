import type {Meta, StoryObj} from '@storybook/react';
import {withRouter} from 'storybook-addon-remix-react-router';
import NavigationMenu from '@/components/atoms/Menu/NavigationMenu';
import homeIcon from '@/assets/icons/home-fill.svg?react';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Home: Story = {
  args: {
    Icon: homeIcon,
    text: '홈',
    to: '/home',
  },
};
