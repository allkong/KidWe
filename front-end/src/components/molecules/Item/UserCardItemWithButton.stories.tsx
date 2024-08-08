import type {Meta, StoryObj} from '@storybook/react';
import UserCardItemWithButton from '@/components/molecules/Item/UserCardItemWithButton';

const meta: Meta<typeof UserCardItemWithButton> = {
  component: UserCardItemWithButton,
};

export default meta;

type Story = StoryObj<typeof UserCardItemWithButton>;
export const Default: Story = {
  args: {
    profile:
      'https://cdn.pixabay.com/photo/2024/07/10/15/21/ai-generated-8886126_1280.png',
    userName: '강혁준',
    banName: '햄스터반',
    negativeLabel: '결석',
    positiveLabel: '출석',
    onClickNegative: () => window.alert('결석'),
    onClickPositive: () => window.alert('출석'),
  },
};
