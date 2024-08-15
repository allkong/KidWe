import type {Meta, StoryObj} from '@storybook/react';
import CommentItem from '@/components/molecules/Board/CommentItem';

const meta: Meta<typeof CommentItem> = {
  component: CommentItem,
};
export default meta;

type Story = StoryObj<typeof CommentItem>;

export const Default: Story = {
  args: {
    writer: '백승우 선생님',
    banName: '치타반',
    content: '졸리네요',
    date: '8.10 19:00',
    isReply: true,
  },
};
