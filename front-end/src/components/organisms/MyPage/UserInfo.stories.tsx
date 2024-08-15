import type {Meta, StoryObj} from '@storybook/react';
import UserInfo from '@/components/organisms/MyPage/UserInfo';

const meta: Meta<typeof UserInfo> = {
  component: UserInfo,
};

export default meta;

type Story = StoryObj<typeof UserInfo>;

export const None: Story = {
  args: {},
};
