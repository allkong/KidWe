import type {Meta, StoryObj} from '@storybook/react';
import PostContent from '@/components/molecules/Post/PostContent';

const meta: Meta<typeof PostContent> = {
  component: PostContent,
};

export default meta;

type Story = StoryObj<typeof PostContent>;

export const Default: Story = {
  args: {
    content: '<b>안녕하세용</b>',
  },
};
