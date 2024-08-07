import type {Meta, StoryObj} from '@storybook/react';
import MemoView from '@/components/organisms/Memo/MemoView';

const meta: Meta<typeof MemoView> = {
  component: MemoView,
};

export default meta;

type Story = StoryObj<typeof MemoView>;

export const None: Story = {
  args: {},
};
