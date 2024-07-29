import type {Meta, StoryObj} from '@storybook/react';
import KindergartenInfomationSelect from '@/components/organisms/Memo/KindergartenInfomationSelect';

const meta: Meta<typeof KindergartenInfomationSelect> = {
  component: KindergartenInfomationSelect,
};

export default meta;

type Story = StoryObj<typeof KindergartenInfomationSelect>;

export const None: Story = {
  args: {},
};
