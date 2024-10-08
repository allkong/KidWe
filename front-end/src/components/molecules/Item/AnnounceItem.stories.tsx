import type {Meta, StoryObj} from '@storybook/react';
import AnnounceItem from '@/components/molecules/Item/AnnounceItem';

const meta: Meta<typeof AnnounceItem> = {
  component: AnnounceItem,
};
export default meta;

type Story = StoryObj<typeof AnnounceItem>;

export const Basic: Story = {
  args: {
    title: '배고파요',
    writer: '백승우 선생님',
    date: '',
    banName: '치타반',
  },
};
