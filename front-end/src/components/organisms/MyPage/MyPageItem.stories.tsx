import type {Meta, StoryObj} from '@storybook/react';
import MyPageItem from '@/components/organisms/MyPage/MyPageItem';

const meta: Meta<typeof MyPageItem> = {
  component: MyPageItem,
};

export default meta;

type Story = StoryObj<typeof MyPageItem>;

export const None: Story = {
  args: {},
};
