import type {Meta, StoryObj} from '@storybook/react';
import MemoLessonSelect from '@/components/organisms/Memo/MemoChildSelect';

const meta: Meta<typeof MemoLessonSelect> = {
  component: MemoLessonSelect,
};

export default meta;

type Story = StoryObj<typeof MemoLessonSelect>;

// ModalPortal로 인한 오류 발생
export const None: Story = {
  args: {},
};
