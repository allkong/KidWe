import type {Meta, StoryObj} from '@storybook/react';
import CommentCount from '@/components/atoms/Comment/CommentCount';

const meta: Meta<typeof CommentCount> = {
  component: CommentCount,
};
export default meta;

type Story = StoryObj<typeof CommentCount>;

export const Default: Story = {
  args: {
    count: 10,
  },
};
