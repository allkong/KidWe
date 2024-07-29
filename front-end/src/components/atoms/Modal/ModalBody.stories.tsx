import type {Meta, StoryObj} from '@storybook/react';
import ModalBody from '@/components/atoms/Modal/ModalBody';

const meta: Meta<typeof ModalBody> = {
  component: ModalBody,
};

export default meta;

type Story = StoryObj<typeof ModalBody>;

export const Default: Story = {
  render: function () {
    return <ModalBody>children</ModalBody>;
  },
};
