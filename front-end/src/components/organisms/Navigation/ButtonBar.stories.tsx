import type {Meta, StoryObj} from '@storybook/react';
import ButtonBar from '@/components/organisms/Navigation/ButtonBar';

const meta: Meta<typeof ButtonBar> = {
  component: ButtonBar,
};

export default meta;

type Story = StoryObj<typeof ButtonBar>;

export const Default: Story = {
  args: {
    label: '작성',
  },
};
