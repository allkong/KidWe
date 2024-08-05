import type {Meta, StoryObj} from '@storybook/react';
import CommentItem from '@/components/molecules/Item/CommentItem';

const meta: Meta<typeof CommentItem> = {
  component: CommentItem,
};
export default meta;

type Story = StoryObj<typeof CommentItem>;

export const Basic: Story = {
  args: {
    writer: '백승우 선생님',
    classname: '치타반',
    content: '졸리네요',
    date: new Date(),
    isReply: true,
  },
};
