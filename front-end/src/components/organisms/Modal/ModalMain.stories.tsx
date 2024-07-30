import type {Meta, StoryObj} from '@storybook/react';
import ModalMain from '@/components/organisms/Modal/ModalMain';

const meta: Meta<typeof ModalMain> = {
  component: ModalMain,
};

export default meta;

type Story = StoryObj<typeof ModalMain>;

export const Default: Story = {
  args: {},
};
