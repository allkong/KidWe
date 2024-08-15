import type {Meta, StoryObj} from '@storybook/react';
import MemoShortcut from '@/components/organisms/Content/MemoShortcut';

const meta: Meta<typeof MemoShortcut> = {
  component: MemoShortcut,
};

export default meta;

type Story = StoryObj<typeof MemoShortcut>;

export const Default: Story = {
  args: {},
};
