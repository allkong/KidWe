import type {Meta, StoryObj} from '@storybook/react';
import AnnounceTitle from '@/components/molecules/Post/ArticleTitle';

const meta: Meta<typeof AnnounceTitle> = {
  component: AnnounceTitle,
};

export default meta;

type Story = StoryObj<typeof AnnounceTitle>;

export const Default: Story = {
  args: {
    title: '여기가',
    banName: '치타반',
  },
};
