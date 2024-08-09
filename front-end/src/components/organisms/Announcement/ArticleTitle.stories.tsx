import type {Meta, StoryObj} from '@storybook/react';
import AnnounceTitle from '@/components/organisms/Announcement/ArticleTitle';

const meta: Meta<typeof AnnounceTitle> = {
  component: AnnounceTitle,
};

export default meta;

type Story = StoryObj<typeof AnnounceTitle>;

export const Default: Story = {
  args: {
    title: '여기가',
    writer: '치타반 선생님',
    classname: '치타반',
    date: '',
  },
};
