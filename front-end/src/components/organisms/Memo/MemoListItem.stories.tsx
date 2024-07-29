import type {Meta, StoryObj} from '@storybook/react';
import MemoListItem from '@/components/organisms/Memo/MemoListItem';

const meta: Meta<typeof MemoListItem> = {
  component: MemoListItem,
};

export default meta;

type Story = StoryObj<typeof MemoListItem>;

export const None: Story = {
  args: {},
};

export const All: Story = {
  args: {
    children: ['정다빈', '백승우', '강혁준'],
    tags: ['점심시간', '사탕', '놀이'],
    time: '10:12 AM',
  },
};

export const ChildrenOverflow: Story = {
  args: {
    children: ['정다빈', '백승우', '강혁준', '서지민', '박동환', '변지환'],
    tags: ['점심시간', '사탕', '놀이'],
    time: '10:12 AM',
  },
};

// scroll bar 모바일 화면이 아닐 때 tailwind-scrollbar-hide 플러그인 고려
export const TagOverflow: Story = {
  args: {
    children: ['정다빈', '백승우', '강혁준'],
    tags: [
      '점심시간',
      '사탕',
      '놀이',
      '오버플로우',
      '에러',
      '여명 화이팅',
      '오버플로우',
      '테스트',
      '테스트',
      '테스트',
      '테스트',
      '테스트',
    ],
    time: '10:12 AM',
  },
};

type MemoListItemProps = React.ComponentProps<typeof MemoListItem>;
export const Page: Story = {
  render: function () {
    const mockupData: MemoListItemProps[] = [
      {
        children: ['정다빈', '백승우', '강혁준'],
        tags: ['점심시간', '사탕', '놀이'],
        time: '10:12 AM',
        onClick: () => {
          window.alert('1');
        },
      },
      {
        children: ['정다빈', '백승우', '강혁준', '서지민', '박동환', '변지환'],
        tags: ['점심시간', '사탕', '놀이'],
        time: '10:12 AM',
        onClick: () => {
          window.alert('2');
        },
      },
      {
        children: ['정다빈', '백승우', '강혁준'],
        tags: ['점심시간', '사탕', '놀이', '오버플로우', '에러', '여명 화이팅'],
        time: '10:12 AM',
        onClick: () => {
          window.alert('3');
        },
      },
    ];
    return (
      <div className="flex flex-col items-center ">
        {mockupData.map(data => (
          <MemoListItem {...data} />
        ))}
      </div>
    );
  },
};
