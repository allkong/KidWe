import type {Meta, StoryObj} from '@storybook/react';
import TabList from '@/components/molecules/List/TabList';

const meta: Meta<typeof TabList> = {
  component: TabList,
};

export default meta;

type Story = StoryObj<typeof TabList>;
export const Default: Story = {
  args: {
    tabs: [
      {id: 1, label: 'Tab 1'},
      {id: 2, label: 'Tab 2'},
    ],
    activeTab: 1,
  },
};
