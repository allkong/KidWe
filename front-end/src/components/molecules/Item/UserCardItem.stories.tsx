import type {Meta, StoryObj} from '@storybook/react';
import UserCardItem from '@/components/molecules/Item/UserCardItem';

const meta: Meta<typeof UserCardItem> = {
  component: UserCardItem,
};

export default meta;

type Story = StoryObj<typeof UserCardItem>;
export const Default: Story = {
  args: {
    profile:
      'https://cdn.pixabay.com/photo/2024/07/10/15/21/ai-generated-8886126_1280.png',
    userName: '강혁준',
    banName: '햄스터반',
    cardType: 'detail',
  },
};

export const Arrow: Story = {
  args: {
    profile:
      'https://cdn.pixabay.com/photo/2024/07/10/15/21/ai-generated-8886126_1280.png',
    userName: '강혁준',
    cardType: 'arrow',
  },
};
