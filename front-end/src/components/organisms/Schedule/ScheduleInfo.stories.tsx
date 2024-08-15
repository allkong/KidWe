import type {Meta, StoryObj} from '@storybook/react';
import ScheduleInfo from '@/components/organisms/Schedule/ScheduleInfo';

const meta: Meta<typeof ScheduleInfo> = {
  component: ScheduleInfo,
};

export default meta;

type Story = StoryObj<typeof ScheduleInfo>;

export const Default: Story = {
  args: {},
};
