import type {Meta, StoryObj} from '@storybook/react';
import ScheduledUserCard from '@/components/molecules/Item/ScheduledUserCard';
import {RoleItem} from '@/enum/roleItem';

const meta: Meta<typeof ScheduledUserCard> = {
  component: ScheduledUserCard,
};

export default meta;

type Story = StoryObj<typeof ScheduledUserCard>;
export const Kindergarten: Story = {
  args: {
    userName: '정다빈',
    banName: '다람쥐반',
    writer: RoleItem.Teacher,
    sendTime: '13:30',
  },
};

export const Parent: Story = {
  args: {
    userName: '정다빈',
    banName: '다람쥐반',
    writer: RoleItem.Guardian,
  },
};
