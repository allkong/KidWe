import type {Meta, StoryObj} from '@storybook/react';
import BracketButton from '@/components/atoms/Button/BracketButton';

const meta: Meta<typeof BracketButton> = {
  component: BracketButton,
};

export default meta;

type Story = StoryObj<typeof BracketButton>;
export const Default: Story = {};
