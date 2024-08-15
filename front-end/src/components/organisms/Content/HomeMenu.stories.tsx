import type {Meta, StoryObj} from '@storybook/react';
import HomeMenu from '@/components/organisms/Content/HomeMenu';

const meta: Meta<typeof HomeMenu> = {
  component: HomeMenu,
};

export default meta;

type Story = StoryObj<typeof HomeMenu>;

export const Default: Story = {
  args: {},
};
