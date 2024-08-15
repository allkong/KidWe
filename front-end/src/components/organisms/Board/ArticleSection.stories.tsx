import type {Meta, StoryObj} from '@storybook/react';
import ArticleSection from '@/components/organisms/Board/ArticleSection';

const meta: Meta<typeof ArticleSection> = {
  component: ArticleSection,
};

export default meta;

type Story = StoryObj<typeof ArticleSection>;

export const Default: Story = {
  args: {
    content: '<b>안녕하세용</b>',
  },
};
