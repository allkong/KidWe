import type {Meta, StoryObj} from '@storybook/react';
import MemoTimeSelect from '@/components/organisms/Memo/MemoTimeSelect';

const meta: Meta<typeof MemoTimeSelect> = {
  component: MemoTimeSelect,
};

export default meta;

type Story = StoryObj<typeof MemoTimeSelect>;

/**
 * ModalPortal에서 index.html의 id가 modal인 div를 참조
 * 그렇지만 storybook에서는 id가 modal인 div가 없기 때문에 오류 발생
 */
export const None: Story = {
  args: {},
};
