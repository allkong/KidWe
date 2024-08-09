import type {Meta, StoryObj} from '@storybook/react';
import MyPageUpdateView from '@/components/organisms/MyPage/MyPageUpdateView';

const meta: Meta<typeof MyPageUpdateView> = {
  component: MyPageUpdateView,
};

export default meta;

type Story = StoryObj<typeof MyPageUpdateView>;

export const None: Story = {
  args: {},
};
