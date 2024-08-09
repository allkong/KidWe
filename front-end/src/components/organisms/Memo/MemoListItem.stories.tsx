import type {Meta, StoryObj} from '@storybook/react';
import MemoListItem from '@/components/organisms/Memo/MemoListItem';

const meta: Meta<typeof MemoListItem> = {
  component: MemoListItem,
};

export default meta;

type Story = StoryObj<typeof MemoListItem>;

export const None: Story = {
  args: {},
};
