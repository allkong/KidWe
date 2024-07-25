import type {Meta, StoryObj} from '@storybook/react';
import Tabs from '@/components/organisms/Navigation/Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      {id: 1, label: '미처리', content: <div>Content 1</div>},
      {id: 2, label: '처리완료', content: <div>Content 2</div>},
    ],
  },
};
