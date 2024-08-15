import type {Meta, StoryObj} from '@storybook/react';
import VoteModal from '@/components/organisms/Modal/VoteModal';

const meta: Meta<typeof VoteModal> = {
  component: VoteModal,
};

export default meta;

type Story = StoryObj<typeof VoteModal>;

export const Default: Story = {
  args: {},
};
