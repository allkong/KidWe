import type {Meta, StoryObj} from '@storybook/react';
import Author from '@/components/molecules/Board/Author';

const meta: Meta<typeof Author> = {
  component: Author,
};
export default meta;

type Story = StoryObj<typeof Author>;

export const Basic: Story = {
  args: {
    writer: '백승우 선생님',
    date: '2024-08-09 15:13',
  },
};
