import type {Meta, StoryObj} from '@storybook/react';
import AuthorItem from '@/components/molecules/Item/AuthorItem';

const meta: Meta<typeof AuthorItem> = {
  component: AuthorItem,
};
export default meta;

type Story = StoryObj<typeof AuthorItem>;

export const Basic: Story = {
  args: {
    writer: '백승우 선생님',
    date: '2024-08-09 15:13',
  },
};
