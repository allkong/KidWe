import type {Meta, StoryObj} from '@storybook/react';
import Button from '@/components/atoms/Button/Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: '수락',
    variant: 'positive',
    round: 'full',
    onClick: () => window.alert('수락되었습니다.'),
  },
};

export const Large: Story = {
  args: {
    label: '작성',
    size: 'large',
    variant: 'positive',
    onClick: () => window.alert('작성 완료되었습니다.'),
  },
};
