import type {Meta, StoryObj} from '@storybook/react';
import UserCardItem from '@/components/molecules/Item/UserCardItem';

const meta: Meta<typeof UserCardItem> = {
  component: UserCardItem,
};

export default meta;

type Story = StoryObj<typeof UserCardItem>;
export const Default: Story = {
  args: {},
};
