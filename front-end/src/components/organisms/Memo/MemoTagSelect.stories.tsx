import type {Meta, StoryObj} from '@storybook/react';
import MemoTagSelect from '@/components/organisms/Memo/MemoTagSelect';

const meta: Meta<typeof MemoTagSelect> = {
  component: MemoTagSelect,
};

export default meta;

type Story = StoryObj<typeof MemoTagSelect>;

export const None: Story = {
  args: {},
};
