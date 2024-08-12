import type {Meta, StoryObj} from '@storybook/react';
import CommentSection from '@/components/organisms/Board/CommentSection';

const meta: Meta<typeof CommentSection> = {
  component: CommentSection,
};

export default meta;

type Story = StoryObj<typeof CommentSection>;

export const Default: Story = {
  args: {},
};
