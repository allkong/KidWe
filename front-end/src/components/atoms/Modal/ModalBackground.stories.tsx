import type {Meta, StoryObj} from '@storybook/react';
import ModalBackground from '@/components/atoms/Modal/ModalBackground';

const meta: Meta<typeof ModalBackground> = {
  component: ModalBackground,
};

export default meta;

type Story = StoryObj<typeof ModalBackground>;

export const Default: Story = {
  args: {},
};

export const EventListener: Story = {
  render: function () {
    return <ModalBackground onClick={() => window.alert('clicked!')} />;
  },
};
