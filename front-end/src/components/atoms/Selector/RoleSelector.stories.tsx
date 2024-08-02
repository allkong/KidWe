import type {Meta, StoryObj} from '@storybook/react';
import RoleSelector from '@/components/atoms/Selector/RoleSelector';

const meta: Meta<typeof RoleSelector> = {
  component: RoleSelector,
};
export default meta;

type Story = StoryObj<typeof RoleSelector>;

export const Function: Story = {
  args: {
    value: '학부모',
    explain: '내가 바로 학부모',
  },
};
