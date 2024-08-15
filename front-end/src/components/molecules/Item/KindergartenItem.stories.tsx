import type {Meta, StoryObj} from '@storybook/react';
import KindergartenItem from '@/components/molecules/Item/KindergartenItem';

const meta: Meta<typeof KindergartenItem> = {
  component: KindergartenItem,
};
export default meta;

type Story = StoryObj<typeof KindergartenItem>;

export const Basic: Story = {
  args: {
    name: '멀캠 유치원',
    address: '서울특별시 테헤란로 212 멀티캠퍼스 17층 1701호',
  },
};
