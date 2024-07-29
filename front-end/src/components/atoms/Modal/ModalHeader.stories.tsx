import type {Meta, StoryObj} from '@storybook/react';
import ModalHeader from '@/components/atoms/Modal/ModalHeader';

const meta: Meta<typeof ModalHeader> = {
  component: ModalHeader,
};

export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Default: Story = {
  render: function () {
    return <ModalHeader title="title" />;
  },
};
