import type {Meta, StoryObj} from '@storybook/react';
import ScheduleAdd from '@/components/organisms/Schedule/ScheduleAdd';

const meta: Meta<typeof ScheduleAdd> = {
  component: ScheduleAdd,
};

export default meta;

type Story = StoryObj<typeof ScheduleAdd>;

export const Default: Story = {
  args: {},
};
