import type {Meta, StoryObj} from '@storybook/react';
import MemoChildSelect from '@/components/organisms/Memo/MemoChildSelect';

const meta: Meta<typeof MemoChildSelect> = {
  component: MemoChildSelect,
};

export default meta;

type Story = StoryObj<typeof MemoChildSelect>;

// ModalPortal로 인한 오류 발생
export const None: Story = {
  args: {},
};
