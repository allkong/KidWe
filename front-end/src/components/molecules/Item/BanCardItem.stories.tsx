import type {Meta, StoryObj} from '@storybook/react';
import BanCardItem from '@/components/molecules/Item/BanCardItem';

const meta: Meta<typeof BanCardItem> = {
  component: BanCardItem,
};

export default meta;

type Story = StoryObj<typeof BanCardItem>;
export const Default: Story = {
  args: {
    banName: '햄스터반',
    kidCount: 99,
    teacherCount: 19,
    cardType: 'detail',
    options: [
      {
        text: '반 수정',
        onClick: () => {
          console.log('반 수정');
        },
      },
      {
        text: '퇴원 처리',
        onClick: () => {},
      },
    ],
  },
};

export const Arrow: Story = {
  args: {
    banName: '치타반',
    kidCount: 10,
    teacherCount: 2,
    cardType: 'arrow',
  },
};
