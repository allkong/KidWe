import type {Meta, StoryObj} from '@storybook/react';
import ScheduledUserCard from '@/components/molecules/Item/ScheduledUserCard';

const meta: Meta<typeof ScheduledUserCard> = {
  component: ScheduledUserCard,
};

export default meta;

type Story = StoryObj<typeof ScheduledUserCard>;
export const Default: Story = {
  args: {},
};
