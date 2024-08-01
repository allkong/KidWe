import type {Meta, StoryObj} from '@storybook/react';
import ScheduleInfoItem from '@/components/organisms/Schedule/ScheduleInfoItem';

const meta: Meta<typeof ScheduleInfoItem> = {
  component: ScheduleInfoItem,
};

export default meta;

type Story = StoryObj<typeof ScheduleInfoItem>;

export const Default: Story = {
  args: {},
};
